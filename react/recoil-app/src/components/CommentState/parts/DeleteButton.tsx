import React from "react";
import {useDeleteComment} from "../../../state/comments";

type DeleteButtonProps = {commentId: number};
const DeleteButton: React.FC<DeleteButtonProps> = ({commentId}) => {
  const deleteComment = useDeleteComment();
  return <button type="button" onClick={() => deleteComment(commentId)}>削除</button>
};

export default DeleteButton;
