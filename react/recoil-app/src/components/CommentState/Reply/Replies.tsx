import React from "react";
import {useReply} from "../../../state/comments";

type RepliesProps = {commentId: number};
const Replies: React.FC<RepliesProps> = ({commentId}) => {
  const replies = useReply(commentId);
  if (!replies) {
    return null
  }
  return (
    <>
      {replies.comments && replies.comments.map(comment => <p key={comment}>{comment}</p>)}
    </>
  );
};

export default Replies;
