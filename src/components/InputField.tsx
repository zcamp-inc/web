import React, { InputHTMLAttributes } from "react";
import { useField, Field } from "formik";
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;

};

export const InputField: React.FC<InputFieldProps> = ({ label, size:_, ...props}) => {
  const [field, { error }] = useField(props);
  return (
   
    <FormControl isInvalid={!!error} variant='floating'>
      <Input {...field} {...props} id={field.name} variant='outline' borderColor='gray.400'  />
      <FormLabel htmlFor="name">{label}</FormLabel>
      {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
    </FormControl>

  );
};
