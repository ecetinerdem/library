import AuthForm from "@/components/AuthForm";
import { signInSchema } from "@/lib/Validations";
import React from "react";

const page = () => {
  return (
    <AuthForm
      type="SIGN_IN"
      schema={signInSchema}
      defaultValues={{
        email: "",
        password: "",
      }}
      onSubmit={() => {}}
    />
  );
};

export default page;