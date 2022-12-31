import React, {Suspense} from "react";
import Comments from "../components/CommentState/Comments";
import SuspenseFallback from "../components/CommentState/Fallback";

const CommentState: React.FC = () => {
  return (
    <Suspense fallback={<SuspenseFallback type="Multi Comments" />}>
      <Comments />
    </Suspense>
  )
};

export default CommentState;
