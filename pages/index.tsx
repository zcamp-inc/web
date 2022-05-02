import {
  Flex,
  Heading,
  Box,
  Button,
  ChakraProvider,
  VStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Container,
  extendTheme,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";

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
            "input:not(:placehostlder-shown) + label, .chakra-select__wrapper + label":
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

const ImgPage = () => {
  return (
    <ChakraProvider theme={theme}>
      <Flex justifyContent="center">
        <img src="/signuppic.png" width="70%" />
      </Flex>
      <Box
        w={["full", "lg"]}
        p={[8, 10]}
        mx="auto"
        border={["none", "1px"]}
        borderRadius={10}
      >
        <VStack spacing={1} align="flex-start" w="full">
          <Flex alignItems="center" justifyContent="space-between" mb={5}>
            <Heading as="h5" size="sm">
              Signup to zcmap
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
              marginLeft={20}
            >
              Signup with Google
            </Button>
          </Flex>

          <Box alignSelf='center'>
            <FormControl variant="floating" id="full_name" isRequired>
              <Input placeholder=" " variant="outline" rounded={10} width={80} />
              <FormLabel>Name</FormLabel>
            </FormControl>

            <FormControl variant="floating" id="email" isRequired mt={4}>
              <Input
                placeholder=" "
                variant="outline"
                rounded={10}
                type="email"
              />
              <FormLabel>Email</FormLabel>
              <FormHelperText>Your CU Email Only</FormHelperText>
            </FormControl>

            <FormControl variant="floating" id="pass" isRequired mt={4}>
              <Input
                placeholder=" "
                variant="outline"
                rounded={10}
                type="password"
              />
              <FormLabel>Password</FormLabel>
              <FormHelperText>Minimum of 8 characters</FormHelperText>
            </FormControl>

          </Box>
          <Flex alignSelf='center'>
            <Button color="white" backgroundColor="#D99EFF" variant="solid" width={60} >
              Continue
            </Button>
          </Flex>
        </VStack>
      </Box>
    </ChakraProvider>
  );
};

export default ImgPage;
