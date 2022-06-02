import { IconButton, Flex, Image, Box  } from "@chakra-ui/react";
import UserProfile from "./UserProfile";

export default function Header({ onOpen, ...rest }: {onOpen: any}) {
  return (
 
    <Flex
      
      // w={{ base: 'full', md: '140vh' }}
      // ml={{ base: 0, md: 80 }}
      display='flex'
      zIndex='1'
      px={{ base: 4, md: 20}}
      top="0"
      bg = "white"
      position="sticky"      
      h={14}
      alignItems="center"      
      borderBottomWidth="1px"
      borderBottomColor='gray.200'
      justifyContent={{ base: "space-between" }}
      
      {...rest}
    >

      <Box>
        <img src="/zlogo/zlogo.png" width="44vh" alt='home logo' />
      </Box>
      
      
      <UserProfile onOpen={onOpen}/>
      
    </Flex>

  );
}
