import React from "react";
import {usePostComment} from "../../../state/comments";
import {useForm} from "react-hook-form";

const Form: React.FC = () => {
  const postComment = usePostComment();
  const {handleSubmit, register, reset} = useForm<{body: string, flag: number}>();
  const onSubmit = handleSubmit((formData) => {
    postComment(formData.body, formData.flag);
    reset();
  })

  return (
    <form onSubmit={onSubmit}>
      <div>
        本文
        <textarea {...register('body')}/>
      </div>
      <div>
        flag
        <select {...register('flag')}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>
      </div>
      <button type="submit">送信</button>
    </form>
  );
};

export default Form;
