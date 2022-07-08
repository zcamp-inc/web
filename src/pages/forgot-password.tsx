import {
  ChakraProvider,
  Box,
  Center,
  Heading,
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Flex,
  Text,
  Image
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
      <Center>
    <ChakraProvider theme={theme}>
    <Flex
      display='flex'
      zIndex='1'
      px={{ base: 4, md: 20}}
      top="1"
      bg = "white"
      position="fixed"     
      w="full" 
      h={14}
      alignItems="center"      
      // borderBottomWidth="1px"
      // borderBottomColor='gray.200'
      justifyContent={{ base: "space-between" }}
    >

      <Flex justify='flex-start'>
        <Image src="/zlogo/zlogo.png" width={14} alt='home logo' onClick={() => router.push('/')}/>
      </Flex>
      
    </Flex>

      <Box
        w={["full", "lg"]}
        mt={40}
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
          alignItems='center'
        >
         
          <Heading as="h5" fontSize="1.5rem" mb={2}>
            You forgot your password, didn't you😂
          </Heading>

          <Text align='center'>
            {" "}
            Let's get you back into your account. 
            Enter the email address you signed up with, 
            and we'll send you an email to reset your password.
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
                      width='full'
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
      </Center>
  );
};

export default ForgotPassword;
