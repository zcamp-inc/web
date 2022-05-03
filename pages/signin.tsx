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
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Link,
    InputRightElement,
    InputGroup,
    Checkbox,
  } from "@chakra-ui/react";
  import { FcGoogle } from "react-icons/fc";
  import NextLink from "next/link";
  import { SetStateAction, useState } from "react";
  
  const Signin = () => {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);
  
    const [input, setInput] = useState('')
    const handleInputChange = (e: any) => setInput(e.target.value)
    const isError = input === ' '

    const [pass, setPass] = useState('')
    const handlePassChange = (e: any) => setPass(e.target.value)
    const isError1 = pass === ' '
  
    return (
      <ChakraProvider>
        <Flex justifyContent="center">
          <img src="/signinpic.png" width="60%" />
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
                
              >
                Signin with Google
              </Button>
            {/* </Flex> */}
          </HStack>
  
            <Box alignSelf="center">
              <FormControl isInvalid={isError}>
                <Input
                  onChange={handleInputChange}
                  placeholder="Username"
                  variant="filled"
                  rounded={10}
                  value={input}
                  id="user_name"
                />
                {!isError ? (
                  <FormHelperText>
                    
                  </FormHelperText>
                ): (
                  <FormErrorMessage>Fullname is required</FormErrorMessage>
                )}
              </FormControl>
  
  
              <FormControl id="pass" isInvalid={isError1} mt={4}>
                <InputGroup>
                  <Input
                    placeholder="Password"
                    variant="filled"
                    rounded={10}
                    type={show ? "text" : "password"}
                    value={pass}
                    onChange={handlePassChange}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleClick}>
                      {show ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
  
                {!isError ? (
                   <FormHelperText></FormHelperText>
                ): (
                  <FormErrorMessage>Password is required</FormErrorMessage>
                )}
              </FormControl>
 
            </Box>
            <HStack w='full' justify='space-between' mt={5}>
                <Checkbox>Remember me</Checkbox>
                <Button variant="link" color="#FF55A8">
                    Forgot Password?
                </Button>
            </HStack>
            <Flex alignSelf="center" mt={5}>
              <Button
                mt={5}
                color="white"
                backgroundColor="#FF55A8"
                variant="solid"
                width={60}
                _hover={{bg: '#FF1E8B'}}
              >
                Sign in
              </Button>
              <Text
                fontWeight={600}
                color="GrayText"
                alignSelf="center"
                mt={5}
                ml={5}
                fontSize='0.8rem'
              >
                Don't have an account?{" "}
                <NextLink href="/" passHref>
                  <Link color="#FF55A8" _hover={{ color: '#FF1E8B'}}> Sign Up</Link>
                </NextLink>
              </Text>
            </Flex>   
        </Box>
      </ChakraProvider>
    );
  };
  
  export default Signin;
  