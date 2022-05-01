import { Flex, Image } from '@chakra-ui/react';

const ImgPage = () =>  (
  <Flex height= "100vh" alignItems= "center" justifyContent= "left">
    <Flex direction="column" background="white" p={12} rounded={10}>
      <Image src='../assets/signup_img.png' width={100} height={100} />
    </Flex>
  </Flex>
)

export default ImgPage;