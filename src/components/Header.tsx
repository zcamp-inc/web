import { IconButton, Flex, Image,  } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import {CgMenuGridO} from "react-icons/cg";
import UserProfile from "./UserProfile";

export default function Header({ onOpen, ...rest }: {onOpen: any}) {
  return (
 
    <Flex
      ml={{ base: 0, md: 60 }}     
      px="4"
      top="0"
      position="sticky"      
      height="20"
      zIndex="1"
      alignItems="center"      
      bg="white"   
      borderRadius="0 10px 10px 0 "
      borderBottomWidth="1px"
      borderBottomColor='gray.200'
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<CgMenuGridO />}
        size='md'

      />

      <Flex
        display={{ base: "flex", md: "none" }}
        align="center"
        ml={4}
      >
        <Image src="/megalogo.png" boxSize='100px' objectFit='contain' alt='home logo' />
      </Flex>

      <UserProfile />
    </Flex>

  );
}
