import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import BottomNav from './BottomNav';

export type WrapperVariant = "small" | "regular";

interface WrapperProps {
    variant?: WrapperVariant;
    children?: React.ReactNode;
}

export const Wrapper: React.FC<WrapperProps> = ({
    children,
    variant="regular",
}) => {
    return(
        <Box>
            {/* <Flex display={{ base: "none", md: "block" }}>
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
      </Drawer> */}

      {/* <Header onOpen={onOpen} /> */}
        <Box    
            mt={8}
            mx="auto"
            maxW={variant==="regular" ? "800px" : "400px"}
            w="100%"
        >
            {children}
        </Box>

        <Flex display={{ base: "flex", md: "none" }}>
        <BottomNav />
      </Flex>
        </Box>
    );
};