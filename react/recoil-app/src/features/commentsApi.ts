import {CommentType} from "../state/comments";

type GetCommentsApiType = (flag?: number | undefined, page?: number ) => Promise<CommentType[]>
export const getCommentsApi: GetCommentsApiType = async (flag, page = 1) => {
  if (flag) {
    const res = await fetch(`http://localhost:3004/comment?_limit=5&_page=${page}&flag=${flag}`);
    return res.json();
  }
  const res = await fetch(`http://localhost:3004/comment?_limit=5&_page=${page}`);
  return res.json();
};

type FindCommentApiType = (commentId: number) => Promise<CommentType>;
export const findCommentApi: FindCommentApiType = async (commentId) => {
  const res = await fetch(`http://localhost:3004/comment?id=${commentId}`);
  const comments =  await res.json();
  return comments[0];
};
