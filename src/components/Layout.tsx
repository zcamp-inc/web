import Header from "./Header";
import LeftBar from "./LeftCard";
import React from "react";
import {
  Box,
  Drawer,
  DrawerContent,
  useDisclosure,
  Flex,
  Center,
} from "@chakra-ui/react";
import RightBar from "./RightCard";
import BottomNav from "./BottomNav";
import UserDrawer from "./UserDrawer";

interface LayoutProps {
  children?: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({children}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Center>
    <Box minH="100vh" maxW="1400px" bg={{ base: "gray.200", md: "gray.200" }}>
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

      <Flex ml={{ base: 0, lg: 60 }} p="4" justify='center'>
        {children}
      </Flex>
      
    </Box>
    </Center>
  );
};


