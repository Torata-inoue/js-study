import React from "react";
import {FormProvider, useForm} from "react-hook-form";
import Groups from "../components/HookForm/Groups";

type FormDataType = {
  body: string;
  groups: {
    items: number[];
    tags: number[];
  }[];
};
const HookForm: React.FC = () => {
  const method = useForm<FormDataType>();
  const valid = (data: FormDataType) => {
    console.log(data);
  };
  return (
    <FormProvider {...method}>
      <form onSubmit={method.handleSubmit(valid)}>
        <div className="HookForm-user">
          username, finger print, is_auth
        </div>
        <Groups />
        <div className="HookForm-text">
          <textarea {...method.register('body', {required: true})} />
        </div>
        <button type="submit">送信</button>
      </form>
    </FormProvider>
  )
};

export default HookForm;
