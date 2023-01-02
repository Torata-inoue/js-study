import {
  atom,
  atomFamily,
  selector,
  selectorFamily,
  useRecoilValue,
  useResetRecoilState,
  useSetRecoilState
} from "recoil";
import {findCommentApi, getCommentsApi, getRepliesApi} from "../features/commentsApi";
import {recoilKeys} from "./recoilKeys";

export type CommentType = {
  id: number;
  body: string;
  flag: number;
};

type ConditionType = {page: number | undefined; flag: number | undefined};
const conditionAtom = atom<ConditionType>({
  key: recoilKeys.COMMENTS_CONDITION,
  default: {page: undefined, flag: undefined}
});

type UseSetConditionType = () => (value: {page?: number | undefined; flag?: number | undefined}) => void;
export const useSetCondition: UseSetConditionType = () => {
  const setCondition = useSetRecoilState(conditionAtom);
  const resetComments = useResetRecoilState(commentsAtom);
  return ({page, flag}) => {
    setCondition(currVal => ({
      page: page || currVal.page,
      flag: flag || currVal.flag
    }));
    resetComments();
  }
};

const commentsAtom = atom<CommentType[]>({
  key: recoilKeys.COMMENTS_COMMENTS,
  default: selector<CommentType[]>({
    key: recoilKeys.COMMENTS_COMMENTS_SELECTOR,
    get: ({get}) => {
      const {flag, page} = get(conditionAtom);
      return getCommentsApi(flag, page);
    }
  })
});

const commentSelector = selectorFamily<CommentType, number>({
  key: recoilKeys.COMMENTS_COMMENT_SELECTOR,
  get: commentId => ({get}) => {
    const comment = get(commentsAtom).find(_comment => commentId === _comment.id);
    if (!comment) {
      return findCommentApi(commentId);
    }
    return comment;
  }
})

type UseCommentsType = () => CommentType[];
export const useComments: UseCommentsType = () => useRecoilValue(commentsAtom);

type UseFindCommentType = (commentId: number) => CommentType;
export const useFindComment: UseFindCommentType = (commentId) => useRecoilValue(commentSelector(commentId));

type UseDeleteCommentType = () => (commentId: number) => void;
export const useDeleteComment: UseDeleteCommentType = () => {
  const setComments = useSetRecoilState(commentsAtom);
  return (commentId) => setComments(currVal => currVal.filter(comment => comment.id !== commentId));
};

export type ReplyType = {commentId: number, comments: string[] | undefined};
const replyAtom = atomFamily<ReplyType, number>({
  key: recoilKeys.COMMENTS_REPLY,
  default: commentId => getRepliesApi(commentId)
});

type UseReplyType = (commentId: number) => ReplyType;
export const useReply: UseReplyType = (commentId) => useRecoilValue(replyAtom(commentId))
