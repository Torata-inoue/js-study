import {atom, selector, selectorFamily, useRecoilValue, useSetRecoilState} from "recoil";
import {findCommentApi, getCommentsApi} from "../features/commentsApi";
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
  return ({page, flag}) =>
    setCondition(currVal => ({
      page: page || currVal.page,
      flag: flag || currVal.flag
    }));
};

const commentsAtom = atom<CommentType[]>({
  key: recoilKeys.COMMENTS_COMMENTS,
  default: getCommentsApi()
});
const commentsSelector = selector<CommentType[]>({
  key: recoilKeys.COMMENTS_COMMENTS_SELECTOR,
  get: ({get}) => {
    const comments = get(commentsAtom);
    const {flag, page} = get(conditionAtom);
    if (flag || page) {
      return getCommentsApi(flag, page);
    }
    return comments;
  },
  set: ({set}, newValue) => {
    set(commentsAtom, newValue);
  }
});

const commentSelector = selectorFamily<CommentType, number>({
  key: recoilKeys.COMMENTS_COMMENT_SELECTOR,
  get: commentId => ({get}) => {
    const comment = get(commentsSelector).find(_comment => commentId === _comment.id);
    if (!comment) {
      return findCommentApi(commentId);
    }
    return comment;
  }
})

type UseCommentsType = () => CommentType[];
export const useComments: UseCommentsType = () => useRecoilValue(commentsSelector);

type UseFindCommentType = (commentId: number) => CommentType;
export const useFindComment: UseFindCommentType = (commentId) => useRecoilValue(commentSelector(commentId));

type UseDeleteCommentType = () => (commentId: number) => void;
export const useDeleteComment: UseDeleteCommentType = () => {
  const setComments = useSetRecoilState(commentsSelector);
  return (commentId) => setComments(currVal => currVal.filter(comment => comment.id !== commentId));
};

