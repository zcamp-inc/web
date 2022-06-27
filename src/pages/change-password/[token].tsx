import { NextPage } from "next";
import { Form, Formik } from "formik";
import { InputField } from "../../components/InputField";
import {
  Box,
  InputGroup,
  InputRightElement,
  Button,
  Flex,
  ChakraProvider,
  Heading,
  HStack,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/router";
import { toErrorMap } from "../../utils/toErrorMap";
import { theme } from "../login";
import { useChangePasswordMutation } from "../../generated/graphql";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../../utils/createUrqlClient";
import NextLink from "next/link";

const ChangePassword: NextPage<{ token: string }> = ({ token }) => {
  const router = useRouter();
  const [, changePassword] = useChangePasswordMutation();
  const [tokenError, setTokenError] = useState("");

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
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
        <HStack
          spacing={1}
          align="center"
          justify="space-between"
          w="full"
          mb={5}
        >
          {/* <Flex mb={5} alignSelf="center"> */}
          <Heading as="h5" fontSize="1.5rem">
            Change Password
          </Heading>
        </HStack>

        <Box alignSelf="center">
          <Formik
            initialValues={{
              newPassword: "",
            }}
            onSubmit={async (values, { setErrors }) => {
              console.log(values);
              const response = await changePassword({
                newPassword: values.newPassword,
                token,
              });
              if (response.data?.changePassword.errors) {
                const errorMap = toErrorMap(
                  response.data.changePassword.errors
                );
                if ("token" in errorMap) {
                  setTokenError(errorMap.token);
                }
                setErrors(errorMap);
              } else if (response.data?.changePassword.user) {
                router.push("/");
              }
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <Box mt={10}>
                  <InputGroup>
                    <InputField
                      name="newPassword"
                      placeholder="new password"
                      label="New Password"
                      type={show ? "text" : "password"}
                      autoComplete={"none"}
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleClick}>
                        {show ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </Box>
                {tokenError ? (
                  <Alert status="error" variant='left-accent' borderRadius='md' mt={2}>
                    <AlertIcon />
                    <AlertTitle>Your token is expired!</AlertTitle>
                    <AlertDescription> <NextLink href="/forgot-password" passHref> Click here to get a new one </NextLink> </AlertDescription>
                  </Alert>
                ) : null}

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
            )}
          </Formik>
        </Box>
      </Box>
    </ChakraProvider>
  );
};

ChangePassword.getInitialProps = ({ query }) => {
  return {
    token: query.token as string,
  };
};

export default withUrqlClient(createUrqlClient)(ChangePassword);
