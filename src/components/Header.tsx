import { IconButton, Flex, Image,  } from "@chakra-ui/react";
import UserProfile from "./UserProfile";

export default function Header({ onOpen, ...rest }: {onOpen: any}) {
  return (
 
    <Flex
      
      w={{ base: 'full', md: '140vh' }}
      ml={{ base: 0, md: 80 }}
      display={{ base: 'flex' }}
      zIndex='1'
      px="4"
      top="0"
      bg = "white"
      position="sticky"      
      height="20"
      alignItems="center"      
      borderBottomWidth="1px"
      borderBottomColor='gray.200'
      justifyContent={{ base: "space-between" }}
      
      {...rest}
    >

      <Flex
        display={{ base: "flex-start", md: "none" }}
      >
        <img src="/relogo.png" width="60vh" alt='home logo' />
      </Flex>
      
      <Flex onClick={onOpen} display ={{ base: "flex-end", md: "none" }}>
      <UserProfile />
      </Flex>
    </Flex>

  );
}
