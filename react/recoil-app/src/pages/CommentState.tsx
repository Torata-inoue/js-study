import React, {Suspense} from "react";
import Comments from "../components/CommentState/Comments";
import SuspenseFallback from "../components/CommentState/Fallback";
import Form from "../components/CommentState/form/Form";

const CommentState: React.FC = () => {
  return (
    <>
      <Form />
      <Suspense fallback={<SuspenseFallback type="Multi Comments" />}>
        <Comments />
      </Suspense>
    </>
  )
};

export default CommentState;
