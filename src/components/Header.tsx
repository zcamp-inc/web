import { IconButton, Flex, Image, Box  } from "@chakra-ui/react";
import UserProfile from "./user/UserProfile";
import { useRouter } from "next/router";
export default function Header({ onOpen, ...rest }: {onOpen: any}) {
  const router = useRouter(); 
  return (
 
    <Flex
      display='flex'
      zIndex='1'
      px={{ base: 0, md: 2}}
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

      <Flex justify='flex-start' onClick={() => router.push('/')} cursor='pointer'>
        <img src="/zlogo/zlogo.png" width="44vh" alt='home logo' />
      </Flex>
      
      <Flex justify='flex-end'>
      <UserProfile onOpen={onOpen}/>

      </Flex>
      
    </Flex>

  );
}
