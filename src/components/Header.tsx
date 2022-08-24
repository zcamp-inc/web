import { IconButton, Flex, Image, Box, Center  } from "@chakra-ui/react";
import UserProfile from "./user/UserProfile";
import { useRouter } from "next/router";

export default function Header({ onOpen, ...rest }: {onOpen: any}) {
  const router = useRouter(); 
  return (
 
    <Flex
      display='flex'
      zIndex='3'
      px={{ base: 4, md: 4, lg: 20}}
      top="0"
      bg = "white"
      position="sticky"      
      h={14}
      alignItems="center"      
      justifyContent={{ base: "space-between", md: "space-between" }}
     
      {...rest}
    >
      <Flex justify='flex-start' onClick={() => router.push('/')} cursor='pointer'>
        <img src="/zlogo/zlogo.png" width="44vh" alt='home logo' />
      </Flex>
      
      <Flex justify='flex-end'>
      <UserProfile onOpen={onOpen}/>

      </Flex>     

      </Flex>

  );
}
