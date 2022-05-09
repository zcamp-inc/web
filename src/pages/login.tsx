import {
  Flex,
  Heading,
  Box,
  Button,
  Text,
  ChakraProvider,
  VStack,
  HStack,
  FormControl,
  useToast,
  FormErrorMessage,
  FormHelperText,
  Input,
  Link,
  InputRightElement,
  InputGroup,
  extendTheme,
  FormLabel,
  InputRightAddon,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import NextLink from "next/link";
import { Formik, Field, Form } from "formik";
import { useState } from "react";


const activeLabelStyles = {
  transform: "scale(0.85) translateY(-24px)",
};

export const theme = extendTheme({
  components: {
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                ...activeLabelStyles,
              },
            },
            "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label":
              {
                ...activeLabelStyles,
              },
            label: {
              top: 0,
              left: 0,
              zIndex: 2,
              position: "absolute",
              backgroundColor: "white",
              pointerEvents: "none",
              mx: 3,
              px: 1,
              my: 2,
              transformOrigin: "left top",
            },
          },
        },
      },
    },
  },
});


const Login = () => {
  // const toast = useToast();

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  // interface Values {
  //   fullname: string;
  //   email: string;
  //   password: string;
  // }

  function validateName(value: string) {
    let error;
    if (!value) {
      error = "Name is required";
    } else if (value.toLowerCase() !== "john") {
      error = "Lol! You're not john😂";
    }
    return error;
  }

  const strongPass = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})"
  );
  function validatePass(value: string) {
    let error;
    if (!value) {
      error = "Password is Required";
    } else if (value.length < 8) {
      error = "Password must be atleast 8 characters";
    }
      return error;
  }

  return (
    <ChakraProvider theme={theme}>
      <Flex justifyContent="center" mt={5} p={5}>
        <NextLink href="/">
          <img src="/signinpic.png" width="500vh" alt="signin_banner" />
        </NextLink>
      </Flex>
      <Box
        w={["full", "lg"]}
        p={[5, 5]}
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
          <Heading as="h5" fontSize="2vh">
            Signin to zcamp
          </Heading>
          <Button
            leftIcon={
              <FcGoogle
                style={{ backgroundColor: "white", borderRadius: 5 }}
                size={24}
              />
            }
            color="white"
            colorScheme="cyan"
            variant="solid"
            width="25vh"
            fontSize="2vh"
          >
            Signin with Google
          </Button>
          {/* </Flex> */}
        </HStack>

        <Box alignSelf="center">
          <Formik
            initialValues={{
              username: "",
              password: "",
            }}
            onSubmit={(values, actions) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                actions.setSubmitting(false);
              }, 1000);
            }}
          >
            {(props) => (
              <Form>
                <Field name="username" validate={validateName}>
                  {({ field, form }: {field: any, form: any}) => (
                    <FormControl
                      variant="floating"
                      id="username"
                      isRequired
                      isInvalid={form.errors.username && form.touched.username}
                    >
                      <Input
                        placeholder=" "
                        variant="outline"
                        rounded={10}
                        {...field}
                        id="username"
                      />
                      <FormLabel htmlFor="username">Username or Email</FormLabel>
                      <FormErrorMessage>
                        {form.errors.username}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Field name="password" validate={validatePass}>
                  {({ field, form }: {field: any, form: any}) => (
                    <FormControl
                      variant="floating"
                      id="password"
                      mt={4}
                      isRequired
                      isInvalid={form.errors.password && form.touched.password}
                    >
                      <InputGroup>
                        <Input
                          placeholder=" "
                          variant="outline"
                          rounded={10}
                          type={show ? "text" : "password"}
                          {...field}
                        />
                        <FormLabel>Password</FormLabel>
                        <InputRightElement width="4.5rem">
                          <Button h="1.75rem" size="sm" onClick={handleClick}>
                            {show ? "Hide" : "Show"}
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                      <FormHelperText>
                        Password should be more than 8 characters
                      </FormHelperText>
                      <FormErrorMessage>
                        {form.errors.password}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Flex alignSelf="center">
                  <Button
                    mt={5}
                    color="#000a16"
                    backgroundColor="#9afff9"
                    variant="solid"
                    width={60}
                    _hover={{ bg: "#6bb2ae" }}
                    type="submit"
                    // onClick={() =>
                    //   toast({
                    //     title: "Account Created.",
                    //     description:
                    //       "Check your email address for verification",
                    //     status: "success",
                    //     duration: 6000,
                    //     isClosable: true,
                    //   })
                    // }
                  >
                    Continue
                  </Button>
                  <Text
                    fontWeight={600}
                    color="GrayText"
                    alignSelf="center"
                    mt={5}
                    ml={5}
                    fontSize="0.8rem"
                  >
                    Not yet a member? {" "}
                    <NextLink href="/register" passHref>
                      <Link color="#9afff9" _hover={{ color: "#6bb2ae" }}>
                        {" "}
                        Register
                      </Link>
                    </NextLink>
                  </Text>
                </Flex>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default Login;
