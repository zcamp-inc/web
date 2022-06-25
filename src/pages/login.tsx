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
import { useLoginMutation } from "../generated/graphql";
import { InputField } from "../components/InputField";
import { toErrorMap } from "../utils/toErrorMap";
import { useRouter } from "next/router";


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

interface LoginProps {}


const Login: React.FC<LoginProps> = ({}) => {
  const [, login] = useLoginMutation();
  const router = useRouter();

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

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
          <Heading as="h5" fontSize="1.5rem">
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
            width={40}
            fontSize="0.7rem"
          >
            Signin with Google
          </Button>
          {/* </Flex> */}
        </HStack>

        <Box alignSelf="center">
          <Formik
            initialValues={{
              usernameOrEmail: "",
              password: "",
            }}
            onSubmit={ async (values, {setErrors}) => {
              console.log(values);
              const response = await login({ password: values.password, usernameOrEmail: values.usernameOrEmail })
              if( response.data?.loginUser.errors ){
                setErrors(toErrorMap(response.data?.loginUser.errors));
              } else if( response.data?.loginUser.user){
                router.push("/")
              }
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <InputField
                  name="usernameOrEmail"
                  placeholder="username"
                  label="Username"
                />                
                <Box mt={5}>
                  <InputGroup>
                    <InputField
                      name="password"
                      placeholder="password"
                      label="Password"
                      type={show ? "text" : "password"}
                      autoComplete={'none'}
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleClick}>
                        {show ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </Box>         

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
