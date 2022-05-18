import { useEffect } from "react";
import { useRouter } from "next/router";
import NextLink from "next/link";

import {
  Box,
  CloseButton,
  Divider,
  Flex,
  Heading,
  Text,
  HStack,
  VStack,
  Badge,
  DrawerBody,
  Avatar,
  AvatarBadge,
  Stack,
  Button,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiSettings,
  FiBookmark,
  FiLayout,
  FiZap,
  FiBell,
  FiStar,
  FiUser,
  FiHelpCircle,
  FiDollarSign,
  FiGitPullRequest,
} from "react-icons/fi";

import { BiUser } from "react-icons/bi";

import { HiOutlineDotsHorizontal, HiOutlineViewGridAdd } from "react-icons/hi";

import NavLink from "./NavLink";
import UserProfile from "./UserProfile";
import { BsListStars } from "react-icons/bs";
import { useAuth0 } from "@auth0/auth0-react";

function FavIcon() {
  return <BsListStars fontSize={26} style={{ marginRight: "15px" }} />;
}

function UserIcon() {
  return <BiUser fontSize={26} style={{ marginRight: "15px" }} />;
}

const ProfileLinkItems = [
  { label: "Profile", icon: FiUser, href: "/" },
  { label: "Favorites", icon: FiStar, href: "/Trending" },
  { label: "Saved Posts", icon: FiBookmark, href: "/Explore" },
  { label: "Z-Flash", icon: FiZap, href: "#" },
];

const ZLinkItems = [
  { label: "Settings", icon: FiSettings, href: "/" },
  { label: "Help Center", icon: FiHelpCircle, href: "/" },
];

const MiscLinkItems = [
  { label: "Zcamp Ads", icon: FiDollarSign, href: "/" },
  { label: "Careers", icon: FiGitPullRequest, href: "/" },
  { label: "Display", icon: FiLayout, href: "/" },
  { label: "Logout", href: "/login" },
];

export default function UserDrawer({ onClose, ...rest }: { onClose: any }) {
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeComplete", onClose);
    return () => {
      router.events.off("routeChangeComplete", onClose);
    };
  }, [router.events, onClose]);

  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } =
    useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <DrawerBody>
      {/* {!isAuthenticated && (
        <NextLink href="/api/auth/signin" passHref>
          <Button
            onClick={(e: { preventDefault: () => void }) => {
              e.preventDefault();
              loginWithRedirect();
            }}
          >
            {" "}
            Login{" "}
          </Button>
        </NextLink>
      )} */}
      {!isAuthenticated && (
        <Box
          transition="0.8s ease"
          bg="white"
          //   w={{ base: "full", md: 60 }}
          //   h="full"
          {...rest}
        >
          <Flex
            h="20"
            alignItems="center"
            mx={2}
            justifyContent="space-between"
          >
            <Text fontWeight={600} fontSize={20}>
              Account Info
            </Text>
            <CloseButton
              display={{ base: "flex", md: "none" }}
              onClick={onClose}
            />
          </Flex>

          <Box>
            <VStack spacing="2" align="center" p={2} mb={3}>
              <NextLink href="/" passHref>
                <Stack align="center">
                  <Avatar size="md" src={user?.picture}>
                    {" "}
                    <AvatarBadge boxSize="1.25em" bg="green.500" />{" "}
                  </Avatar>
                  <Text fontWeight={600}>
                    {user?.nickname}
                  </Text>
                </Stack>
              </NextLink>
              <HStack spacing={10}>
                <Text>
                  204
                  <br /> Points
                </Text>
                <Text>
                  20k <br /> Upvotes
                </Text>
                <Badge colorScheme="green" ml={1} mr={4} variant="outline">
                  Fish
                </Badge>
              </HStack>
            </VStack>
            <Box></Box>
          </Box>
          {ProfileLinkItems.map((link, i) => (
            <NavLink key={i} link={link} />
          ))}
          <Divider />

          {ZLinkItems.map((link, i) => (
            <NavLink key={i} link={link} />
          ))}

          <Divider />

          {MiscLinkItems.map((link, i) => (
            <NavLink key={i} link={link} />
          ))}

          {/* <Box
          mt="5px"
          borderRadius="10px"
          p={{ base: 2, md: 0 }}
          w={{ base: "full", md: 60 }}
        >
          <Box
            bg="#000a16"
            borderRadius="10px"
            h="280px"
            w={{ base: "full", md: 60 }}
          >
            <Flex borderRadius="10px 10px 0 0">
              <img src="/rewavy.png" width="100%" />
            </Flex>
            <Flex ml={5} mt={2}>
              <Text color="white" fontWeight={400} fontSize={14} w={56}>
                Discover new camps, join and interact with campers.
                <br /> Define your homefeed with your favorite camps
              </Text>
            </Flex>
            <VStack mt={2}>
              <Button
                w={40}
                variant="outline"
                color="#57FFF5"
                outlineColor="#57FFF5"
                _hover={{ bg: "#57FFF5", color: "#000a16" }}
              >
                Create Subcamp
              </Button>
            </VStack>
          </Box>
        </Box> */}
        </Box>
      )}
    </DrawerBody>
  );
}
