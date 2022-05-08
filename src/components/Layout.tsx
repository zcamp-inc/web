import Header from './Header';
import LeftBar from './LeftBar';

import { Box, Drawer, DrawerContent, useDisclosure, Flex } from "@chakra-ui/react";



export default function Layout({ children } : {children: any}) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    
    return (
        <Box minH="100vh" bg="gray.100">
            <Flex  display={{ base: "none", md: "block" }} >
            <LeftBar onClose={() => onClose} />
            </Flex>
            <Drawer autoFocus={false} isOpen={isOpen} placement="left" onClose={onClose} returnFocusOnClose={false} onOverlayClick={onClose} >
                <DrawerContent>
                    <LeftBar onClose={onClose} />
                </DrawerContent>
            </Drawer>  
            <Header onOpen={onOpen} />       
              
            <Box ml={{ base: 0, md: 60 }} p="4"> {children} </Box>
        </Box>
    );
}