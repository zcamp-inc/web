import React, { InputHTMLAttributes } from "react";
import { useField } from "formik";
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Textarea,
} from "@chakra-ui/react";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label?: string;
  textarea?: boolean;

};

export const InputField: React.FC<InputFieldProps> = ({ label, textarea, size:_, ...props}) => {
  let InputOrTextArea = Input;
  if (textarea){
    InputOrTextArea = Textarea;
  }

  const [field, { error }] = useField(props);
  return (
   
    <FormControl isInvalid={!!error} variant='floating'>
      <InputOrTextArea {...field} {...props} id={field.name} />
      <FormLabel htmlFor="name">{label}</FormLabel>
      {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
    </FormControl>

  );
};
