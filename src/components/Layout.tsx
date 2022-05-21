import Header from "./Header";
import LeftBar from "./LeftBar";

import {
  Box,
  Drawer,
  DrawerContent,
  useDisclosure,
  Flex,
  extendTheme,
} from "@chakra-ui/react";
import RightBar from "./RightCard";
import BottomNav from "./BottomNav";
import UserDrawer from "./UserDrawer";



export default function Layout({ children }: { children: any }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh" bg= {{ base: 'gray.200', md: 'white'}} >
      <Flex display={{ base: "none", md: "block" }}>
        <LeftBar onClose={() => onClose} />
      </Flex>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        // returnFocusOnClose={false}
        onOverlayClick={onClose}
      >
        <DrawerContent>
          <UserDrawer onClose={onClose} />
        </DrawerContent>
      </Drawer>      
      
      <Header onOpen={onOpen} />

      <Flex display={{ base: "flex", md: "none"}}>
        <BottomNav />
      </Flex>

      <Box ml={{ base: 0, lg: 60 }} p="4">
        {" "}
        {children}{" "}
      </Box>
    </Box>
  );
}
