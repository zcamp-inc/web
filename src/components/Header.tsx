import { IconButton, Flex, Image, Box  } from "@chakra-ui/react";
import UserProfile from "./UserProfile";

export default function Header({ onOpen, ...rest }: {onOpen: any}) {
  return (
 
    <Flex
      display='flex'
      zIndex='1'
      px={{ base: 4, md: 20}}
      top="0"
      bg = "gray.200"
      position="sticky"      
      h={14}
      alignItems="center"      
      // borderBottomWidth="1px"
      // borderBottomColor='gray.200'
      justifyContent={{ base: "space-between" }}
      
      {...rest}
    >

      <Flex justify='flex-start'>
        <img src="/zlogo/zlogo.png" width="44vh" alt='home logo' />
      </Flex>
      
      <Flex justify='flex-end'>
      <UserProfile onOpen={onOpen}/>

      </Flex>
      
    </Flex>

  );
}
