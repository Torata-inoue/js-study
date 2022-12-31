import React from "react";
import {CommentType} from "../../state/comments";
import {Link} from "react-router-dom";
import DeleteButton from "./parts/DeleteButton";

const commentStyle = {
  border: 'solid 1px black',
  padding: 5,
};
const pStyle = {
  padding: 0,
  margin: 0
};

type CommentProps = {comment: CommentType};
const Comment: React.FC<CommentProps> = ({comment}) => (
  <div style={commentStyle}>
    <p style={pStyle}>
      id: <Link to={`/state/${comment.id}`}>{comment.id}</Link>
    </p>
    <p style={pStyle}>body: {comment.body}</p>
    <p style={pStyle}>flag: {comment.flag}</p>
    <DeleteButton commentId={comment.id} />
  </div>
);

export default Comment;
