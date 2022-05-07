import {
  IconButton,
  Avatar,
  Box,
  Flex,
  HStack,
  Heading,
  Text,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  MenuGroup,
  Badge,
  VStack,
  AvatarBadge,
} from "@chakra-ui/react";
import { CgProfile } from "react-icons/cg";
import {
  FiChevronDown,
  FiSettings,
  FiBookmark,
  FiLogOut,
  FiBell,
} from "react-icons/fi";
import { IoMailOutline, IoNotificationsOutline } from 'react-icons/io5';

export default function UserProfile() {
  return (
    <HStack spacing={{ base: "0", md: "6" }}>
      <IconButton
        size="md"
        variant="ghost"
        aria-label="open notify"
        icon={<IoNotificationsOutline size={26} />}
        _hover={{ bg: '#000a16', color: 'white'}}
      />
      <IconButton
        size="md"
        variant="ghost"
        aria-label="open mail"
        icon={<IoMailOutline size={26} />}
        _hover={{ bg: '#000a16', color: 'white'}}
      />
      <Flex alignItems="center">
        <Menu>
          <MenuButton
            py={2}
            transition="all 0.3s"
            _focus={{ boxShadow: "none" }}
             
          >
            <HStack
              spacing="4"
              align="center"
              cursor="pointer"
              borderRadius={30}
              backgroundColor="#C4C4C4"
              p={2}
              _hover={{ bg: '#000a16', color: 'white'}}
            >
              <Avatar size="sm">
                {" "}
                <AvatarBadge boxSize="1.25em" bg="green.500" />{" "}
              </Avatar>
              <VStack
                flexDir="column"
                ml={4}
                mr={2}
                display={{ base: "none", md: "flex" }}
                alignItems="flex-start"
                spacing="1px"
              >
                <Heading as="h3" size="sm">
                  Jane Test
                </Heading>

                <Text>204 Points</Text>
              </VStack>
              <Box display={{ base: "none", md: "flex"}} >
              <Badge colorScheme="green" ml={1} mr={2} variant="outline">
                Fish
              </Badge>
              <FiChevronDown />
              </Box>
            </HStack>
          </MenuButton>
          <MenuList fontSize="lg" bg="white" borderColor="gray.200">
            <MenuGroup title="My Stuff">
              <MenuItem icon={<CgProfile />}>Profile</MenuItem>
              <MenuItem icon={<FiSettings />}>Settings</MenuItem>
              <MenuItem icon={<FiBookmark />}>Saved Posts </MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup title="Help">
              <MenuItem>Docs</MenuItem>
              <MenuItem>FAQ</MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </HStack>
  );
}
