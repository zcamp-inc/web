import { Flex, Heading, Box, Button } from '@chakra-ui/react';

const ImgPage = () =>  (
  <Flex height= "100vh" alignItems= "center" justifyContent= "left">
    <Flex direction="column" background="white" p={12} rounded={10}>
      <img src='/signup.png' width={500} height={100} />
    </Flex>
    <Box maxW = '32rem'>
      <Heading mb={4}>Sign up to zcamp</Heading>
      <Button size='lg' colorScheme='green' mt='24px'>Sign up with Google </Button>
    </Box>
  </Flex>
)

export default ImgPage;