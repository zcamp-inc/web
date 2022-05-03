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
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import NextLink from "next/link";
import { SetStateAction, useState } from "react";

const ImgPage = () => {
  const toast = useToast()

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const [input, setInput] = useState('')
  const handleInputChange = (e:any) => setInput(e.target.value)
  const isError = input === ' '

  return (
    <ChakraProvider>
      <Flex justifyContent="center">
        <img src="/signuppic.png" width="60%" />
      </Flex>
      <Box
        w={["full", "lg"]}
        p={[5 ,5]}
        mx="auto"
        border={["none"]}
        borderRadius={10}
        alignSelf="center"
      >
        <HStack spacing={1} align='center' justify='space-between' w='full' mb={5}>
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
            <FormControl isInvalid={isError}>
              <Input
                onChange={handleInputChange}
                placeholder="Full Name"
                variant="filled"
                rounded={10}
                value={input}
                id="full_name"
              />
              {!isError ? (
                <FormHelperText>
                  
                </FormHelperText>
              ): (
                <FormErrorMessage>Fullname is required</FormErrorMessage>
              )}
            </FormControl>

            <FormControl id="email" isInvalid={isError} mt={4}>
              <Input
                placeholder="Email"
                variant="filled"
                rounded={10}
                type="email"
                value={input}
                onChange={handleInputChange}
              />
              {!isError ? (
                 <FormHelperText>Your CU Email Only</FormHelperText>
              ): (
                <FormErrorMessage>Email is required</FormErrorMessage>
              )}
             
            </FormControl>

            <FormControl id="pass" isInvalid={isError} mt={4}>
              <InputGroup>
                <Input
                  placeholder="Password"
                  variant="filled"
                  rounded={10}
                  type={show ? "text" : "password"}
                  value={input}
                  onChange={handleInputChange}
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>

              {!isError ? (
                 <FormHelperText>Minimum of 8 Characters</FormHelperText>
              ): (
                <FormErrorMessage>Password is required</FormErrorMessage>
              )}
            </FormControl>


          </Box>
          <Flex alignSelf="center">
            <Button
              mt={5}
              color="white"
              backgroundColor="#D99EFF"
              variant="solid"
              width={60}
              _hover= {{ bg: '#B94EFF'}}
              onClick = {() => 
                toast({
                  title: 'Account Created.',
                  description: "Check your email address for verification",
                  status: 'success',
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
              fontSize='0.8rem'
            >
              Already a member?{" "}
              <NextLink href="/signin" passHref>
                <Link color="#D99EFF" _hover={{ color: '#B94EFF'}}> Sign In</Link>
              </NextLink>
            </Text>
          </Flex>   
      </Box>
    </ChakraProvider>
  );
};

export default ImgPage;
