import {
  atom,
  atomFamily,
  selector,
  selectorFamily, useRecoilCallback,
  useRecoilValue,
  useSetRecoilState
} from "recoil";
import {findCommentApi, getCommentsApi, getRepliesApi, postCommentApi} from "../features/commentsApi";
import {recoilKeys} from "./recoilKeys";

export type CommentType = {
  id: number;
  body: string;
  flag: number;
};

const conditionAtom = atom<number | undefined>({
  key: recoilKeys.COMMENTS_CONDITION,
  default: undefined
});

const pageState = atom<number>({
  key: recoilKeys.COMMENTS_PAGE,
  default: 1
});

type UseConditionType = () => {flag: number | 'none', page: number};
export const useCondition: UseConditionType = () => ({flag: useRecoilValue(conditionAtom) || 'none', page: useRecoilValue(pageState)})

type UseSetConditionType = () => (value: {page?: number | undefined; flag?: number | undefined}) => void;
export const useSetCondition: UseSetConditionType = () => {
  const setCondition = useSetRecoilState(conditionAtom);
  const setPage = useSetRecoilState(pageState);
  return ({page, flag}) => {
    setCondition(currVal => flag || currVal);
    setPage(currVal => page || currVal);
  }
};

const commentsAtom = atom<CommentType[]>({
  key: recoilKeys.COMMENTS_COMMENTS,
  default: selector<CommentType[]>({
    key: recoilKeys.COMMENTS_COMMENTS_SELECTOR,
    get: ({get}) => {
      const flag = get(conditionAtom);
      const page = get(pageState);
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

type UsePostCommentType = () => (body: string, flag: number) => void;
export const usePostComment: UsePostCommentType = () => {
  return useRecoilCallback(({set, reset}) => async (body, flag) => {
    const res = await postCommentApi(body, flag);
    reset(pageState);
    reset(conditionAtom);
    set(commentsAtom, currVal => [res, ...currVal]);
  });
};

export type ReplyType = {commentId: number, comments: string[] | undefined};
const replyAtom = atomFamily<ReplyType, number>({
  key: recoilKeys.COMMENTS_REPLY,
  default: commentId => getRepliesApi(commentId)
});

type UseReplyType = (commentId: number) => ReplyType;
export const useReply: UseReplyType = (commentId) => useRecoilValue(replyAtom(commentId))
