import { IconButton, Flex, Image,  } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import {CgMenuGridO} from "react-icons/cg";
import UserProfile from "./UserProfile";

export default function Header({ onOpen, ...rest }: {onOpen: any}) {
  return (
 
    <Flex
      ml={{ base: 0, md: 80 }}     
      px="4"
      top="0"
      position="sticky"      
      height="20"
      zIndex="1"
      alignItems="center"      
      bg="white"   
      borderBottomWidth="1px"
      borderBottomColor='gray.200'
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      {/* <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<CgMenuGridO />}
        // size='md'

      /> */}

      <Flex
        display={{ base: "flex-start", md: "none" }}
      >
        <img src="/relogo.png" width="60vh" alt='home logo' />
      </Flex>
      
      <Flex onClick={onOpen} display ={{ base: "flex", md: "none" }}>
      <UserProfile />
      </Flex>
    </Flex>

  );
}
