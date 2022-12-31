import React from "react";
import {useComments, useSetCondition} from "../../state/comments";
import Comment from "./Comment";

const pages = [1, 2, 3, 4, 5, 6];
const flags = [1, 2, 3];

const Comments: React.FC = () => {
  const comments = useComments();
  const setCondition = useSetCondition();
  return (
    <>
      <p>page</p>
      {pages.map(page => <button key={page} onClick={() => setCondition({page})}>{page}</button> )}
      <p>flag</p>
      {flags.map(flag => <button key={flag} onClick={() => setCondition({flag})}>{flag}</button> )}
      {comments.map(comment => <Comment comment={comment} key={comment.id} />)}
    </>
  );
};

export default Comments;
