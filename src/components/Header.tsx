import { IconButton, Flex, Image, Box  } from "@chakra-ui/react";
import UserProfile from "./user/UserProfile";

export default function Header({ onOpen, ...rest }: {onOpen: any}) {
  return (
 
    <Flex
      display='flex'
      zIndex='1'
      px={{ base: 0, md: 20}}
      top="0"
      bg = "white"
      position="sticky"      
      h={14}
      alignItems="center"      
      // borderBottomWidth="1px"
      // borderBottomColor='gray.200'
      justifyContent={{ base: "space-between", md: "space-between" }}
      {...rest}
    >

      <Flex justify='flex-start' ml={{ md: -16 }}>
        <img src="/zlogo/zlogo.png" width="44vh" alt='home logo' />
      </Flex>
      
      <Flex justify='flex-end' mr={{ md: -20}}>
      <UserProfile onOpen={onOpen}/>

      </Flex>
      
    </Flex>

  );
}
