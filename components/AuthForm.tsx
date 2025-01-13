"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  DefaultValues,
  SubmitHandler,
  useForm,
  UseFormReturn,
} from "react-hook-form";

import React from "react";
import { z } from "zod";

//interface Props<T extends FieldValues> {

//}

const AuthForm = ({ type, schema, defaultValues, onSubmit }: Props) => {
  // 1. Define your form.
  const form: UseFormReturn<T> = useForm({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>,
  });

  // 2. Define a submit handler.
  const handleSubmit: SubmitHandler<T> = async (data) => {};

  return <div>AuthForm -- {type}</div>;
};

export default AuthForm;
