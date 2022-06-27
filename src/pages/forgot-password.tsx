import {
  ChakraProvider,
  Box,
  HStack,
  Heading,
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Flex,
  Text
} from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { InputField } from "../components/InputField";
import { toErrorMap } from "../utils/toErrorMap";
import NextLink from "next/link";
import { theme } from "./login";
import { useForgotPasswordMutation } from "../generated/graphql";

const ForgotPassword: React.FC<{}> = () => {
  const router = useRouter();
  const [, forgotPassword] = useForgotPasswordMutation();
  const [complete, setComplete] = useState(false);

  return (
    <ChakraProvider theme={theme}>
      <Box
        w={["full", "lg"]}
        p={10}
        mx="auto"
        border={["none"]}
        borderRadius={10}
        alignSelf="center"
      >
        <Flex
          direction='column'  
          justify="space-between"
          w="full"
          mb={5}
        >
          {/* <Flex mb={5} alignSelf="center"> */}
          <Heading as="h5" fontSize="1.5rem" mb={2}>
            Forgot Password
          </Heading>

          <Text>
            {" "}
            Enter the email address you used when you joined and we'll send you
            instructions to reset your password.
          </Text>
        </Flex>

        <Box alignSelf="center">
          <Formik
            initialValues={{
              email: "",
            }}
            onSubmit={async (values) => {
              await forgotPassword(values);
              setComplete(true);
            }}
          >
            {({ isSubmitting }) =>
              complete ? (
                <Alert
                  status="success"
                  variant="subtle"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  textAlign="center"
                  height="200px"
                >
                  <AlertIcon boxSize="40px" mr={0} />
                  <AlertTitle mt={4} mb={1} fontSize="lg">
                    Form submitted!
                  </AlertTitle>
                  <AlertDescription maxWidth="sm">
                    If an account with the email exists, we sent you an email😉
                  </AlertDescription>
                </Alert>
              ) : (
                <Form>
                  <InputField
                    name="email"
                    placeholder="email"
                    label="Email"
                    type="email"
                  />

                  <Flex alignSelf="center">
                    <Button
                      mt={5}
                      color="#000a16"
                      backgroundColor="#9afff9"
                      variant="solid"
                      width={60}
                      _hover={{ bg: "#6bb2ae" }}
                      type="submit"
                      isLoading={isSubmitting}
                    >
                      Change Password
                    </Button>
                  </Flex>
                </Form>
              )
            }
          </Formik>
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default ForgotPassword;
