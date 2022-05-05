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
import { Formik, Field, Form, FormikHelpers } from "formik";
import { useState } from "react";

const activeLabelStyles = {
  transform: 'scale(0.85) translateY(-24px)',
}

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
            'input:not(:placeholder-shown) + label, .chakra-select__wrapper + label':
              {
                ...activeLabelStyles,
              },
            label: {
              top: 0,
              left: 0,
              zIndex: 2,
              position: 'absolute',
              backgroundColor: 'white',
              pointerEvents: 'none',
              mx: 3,
              px: 1,
              my: 2,
              transformOrigin: 'left top'
            },
          },
        },
      },
    },
  },
})

const Register = () => {
  const toast = useToast();

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  // interface Values {
  //   fullname: string;
  //   email: string;
  //   password: string;
  // }

  function validateEmail(value: string) {
    let error;
    if (!value) {
      error = "Email is required";
    } else if (value.toLowerCase() !== "john") {
      error = "Lol! You're not john😂";
    }
    return error;
  }

  return (
    <ChakraProvider theme={theme}>
      <Flex justifyContent="center">
        <img src="/signuppic.png" width="60%" alt="signup_banner" />
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
          <Heading as="h5" size="sm">
            Signup to zcamp
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
          >
            Signup with Google
          </Button>
          {/* </Flex> */}
        </HStack>

        <Box alignSelf="center">
          <Formik
            initialValues={{
              fullname: "",
              email: "",
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
                <FormControl variant='floating' id='full-name' isRequired>
                  <Input
                    placeholder=" "
                    variant="outline"
                    rounded={10}
                    
                  />
                  <FormLabel>Full Name</FormLabel>
                </FormControl>

                <Field name="email" validate={validateEmail}>
                  {({ field, form }: { field: any; form: any }) => (
                    <FormControl
                      mt={4}
                      variant='floating' id='full-name' isRequired
                    >
                      <InputGroup>
                      <Input
                        {...field}
                        id="email"
                        placeholder=" "
                        variant="outline"
                        rounded={10}
                      />
                      <InputRightAddon children='@stu.cu.edu.ng' />
                      </InputGroup>
                      <FormLabel>Email</FormLabel>
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <FormControl id="pass" mt={4}  variant='floating' isRequired>
                  <InputGroup>
                    <Input
                      placeholder=" "
                      variant="outline"
                      rounded={10}
                      type={show ? "text" : "password"}
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleClick}>
                        {show ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <FormLabel>Password</FormLabel>
                </FormControl>

                <Flex alignSelf="center">
                  <Button
                    mt={5}
                    color="white"
                    backgroundColor="#D99EFF"
                    variant="solid"
                    width={60}
                    _hover={{ bg: "#B94EFF" }}
                    isLoading={props.isSubmitting}
                    type="submit"
                    onClick={() =>
                      toast({
                        title: "Account Created.",
                        description:
                          "Check your email address for verification",
                        status: "success",
                        duration: 6000,
                        isClosable: true,
                      })
                    }
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
                    Already a member?{" "}
                    <NextLink href="/login" passHref>
                      <Link color="#D99EFF" _hover={{ color: "#B94EFF" }}>
                        {" "}
                        Sign In
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

export default Register;
