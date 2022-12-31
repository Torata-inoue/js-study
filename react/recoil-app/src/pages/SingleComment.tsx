import React, {Suspense} from "react";
import {Link, useParams} from "react-router-dom";
import {useFindComment} from "../state/comments";
import Comment from "../components/CommentState/Comment";
import SuspenseFallback from "../components/CommentState/Fallback";

type CommentLoaderProps = {commentId: number};
const CommentLoader: React.FC<CommentLoaderProps> = ({commentId}) => {
  const comment = useFindComment(commentId);
  return <Comment comment={comment} />
}

const SingleComment: React.FC = () => {
  const {commentId} = useParams<{commentId: string}>();
  return (
    <>
      <Suspense fallback={<SuspenseFallback type="Single Comment" />}>
        <CommentLoader commentId={parseInt(commentId as string)} />
      </Suspense>
      <Link to={'/state'}>一覧に戻る</Link>
    </>
  )
};

export default SingleComment;
