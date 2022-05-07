import {
    IconButton,
    Avatar,
    Box,
    Flex,
    HStack,
    VStack,
    Text,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
    Badge,
  } from "@chakra-ui/react";
  import { FiChevronDown, FiBell } from "react-icons/fi";
  
  export default function UserProfile() {
    return (
      <HStack spacing={{ base: "0", md: "6" }}>
        
        <Flex alignItems="center">
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack spacing="4">
                <Avatar
                  size="md"
                  src={"none"}
                />
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="lg">Jane Test</Text>
                  <Badge ml='1' colorScheme='green'>Fish</Badge>
                </VStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList fontSize="lg" bg="white" borderColor="gray.200">
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>ZRewards</MenuItem>
              <MenuDivider />
              <MenuItem>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    );
  }
  