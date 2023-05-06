import React, {useState, Suspense} from "react";
import Replies from "./Replies";
import SuspenseFallback from "../Fallback";

type ReplyBlockProps = {commentId: number};
const ReplyBlock: React.FC<ReplyBlockProps> = ({commentId}) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <button type="button" onClick={() => setOpen(!open)}>返信を表示</button>
      {open && (
        <>
          <Suspense fallback={<SuspenseFallback type="reply" />}>
            <Replies commentId={commentId} />
          </Suspense>
          <div>
            返信投稿フォーム
          </div>
        </>
      )}
    </>
  );
};

export default ReplyBlock;
