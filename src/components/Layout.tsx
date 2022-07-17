import Header from "./Header";
import React from "react";
import {
  Box,
  Drawer,
  DrawerContent,
  useDisclosure,
  Flex,
  Center,
} from "@chakra-ui/react";
import UserDrawer from "./user/UserDrawer";

interface LayoutProps {
  children?: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({children}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Center>
    <Box minH="100vh" minW='full' bg="gray.200">
      {/* <Flex display={{ base: "none", md: "block" }}>
        <LeftBar onClose={() => onClose} />
      </Flex>
      */}
     
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        // returnFocusOnClose={false}
        onOverlayClick={onClose}
      >
        <DrawerContent >
          <UserDrawer onClose={onClose} />
        </DrawerContent>
      </Drawer> 


      <Header onOpen={onOpen} />

      <Flex justify='center'>
        {children}
      </Flex>
      
    </Box>
    </Center>
  );
};


