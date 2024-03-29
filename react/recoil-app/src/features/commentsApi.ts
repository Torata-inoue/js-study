import {CommentType, ReplyType} from "../state/comments";

type GetCommentsApiType = (flag?: number | undefined, page?: number ) => Promise<CommentType[]>
export const getCommentsApi: GetCommentsApiType = async (flag, page = 1) => {
  if (flag) {
    const res = await fetch(`http://localhost:3004/comment?_limit=5&_page=${page}&flag=${flag}&_sort=id&_order=desc`);
    return res.json();
  }
  const res = await fetch(`http://localhost:3004/comment?_limit=5&_page=${page}&_sort=id&_order=desc`);
  return res.json();
};

type FindCommentApiType = (commentId: number) => Promise<CommentType>;
export const findCommentApi: FindCommentApiType = async (commentId) => {
  const res = await fetch(`http://localhost:3004/comment?id=${commentId}`);
  const comments =  await res.json();
  return comments[0];
};

type GetRepliesApiType = (commentId: number) => Promise<ReplyType>;
export const getRepliesApi: GetRepliesApiType = async (commentId) => {
  const res = await fetch(`http://localhost:3004/reply?commentId=${commentId}`);
  const reply = await res.json();
  return reply[0];
};

type PostCommentType = (body: string, flag: number) => Promise<CommentType>;
export const postCommentApi: PostCommentType = async (body, flag) => {
  const res = await fetch('http://localhost:3004/comment', {
    method: 'POST',
    body: JSON.stringify({body, flag}),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });

  return res.json();
}
