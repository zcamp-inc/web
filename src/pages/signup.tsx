import React from "react";
import { Formik, Form } from "formik";
import { Box, Button } from "@chakra-ui/react";
import { Wrapper } from "../components/Wrapper";
import { InputField } from "../components/InputField";

interface signupProps {}

const Signup: React.FC<signupProps> = ({}) => {
  return (
    <Wrapper>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values, handleChange }) => (
          <Form>
            <InputField
              name="username"
              placeholder="username"
              label="Username"
            />
            <Box>
            <InputField
              name="password"
              placeholder="password"
              label="Password"
              type="password"
            />
            </Box>
            <Button type="submit">sign up</Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default Signup