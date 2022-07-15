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
  Icon,
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
import NavLink from "../NavLink";
import { useMeQuery, useLogoutMutation } from "../../generated/graphql";

const ProfileLinkItems = [
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
];

export default function UserDrawer({ onClose, ...rest }: { onClose: any }) {
  const router = useRouter();
  const [{ data }] = useMeQuery();
  const [{ fetching: logoutFetching }, logout] = useLogoutMutation();

  useEffect(() => {
    router.events.on("routeChangeComplete", onClose);
    return () => {
      router.events.off("routeChangeComplete", onClose);
    };
  }, [router.events, onClose]);

  return (
    <DrawerBody>
      {/* {!isAuthenticated && (
        <NextLink href="/api/auth/signin" passHref>
         
        </NextLink>
      )} */}

      <Box transition="0.8s ease" bg="white" {...rest}>
        <Flex h="20" alignItems="center" mx={2} justifyContent="space-between">
          <Text fontWeight={600} fontSize={20}>
            Account Info
          </Text>
          <CloseButton display="flex" onClick={onClose} />
        </Flex>

        <Box>
          <VStack spacing="2" align="center" p={2} mb={3}>
            <NextLink href="/" passHref>
              <Stack align="center">
                <Avatar src={data?.me?.user?.profileImgUrl} size="md">
                  {" "}
                  <AvatarBadge boxSize="1.25em" bg="green.500" />{" "}
                </Avatar>
                <Text fontWeight={600}>{data?.me?.user?.username}</Text>
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

        <NextLink href={{ pathname: '/u/[username]', query: { username: data?.me?.user?.username} }} passHref>
        <Flex
          align="center"
          p={4}
          mx={4}
          w={48}       
          borderRadius="lg"
          role="group"          
          cursor="pointer"
          color="#000a16"
          fontWeight= {500}
          _hover={{ bg: "#DDB2FF", color: "#5E00AB", fontWeight: 600 }}
        >
  
              <Icon
                mr="15px"
                fontSize={{ base: 24, md: 30 }}
                _groupHover={{ color: "#5E00AB" }}
                as={FiUser}
                strokeWidth={1.7}
                
              />
            
            <Text fontSize={{base: "1.05rem", lg: "1.3rem"}}  >
              Profile
            </Text>
        </Flex>

    </NextLink>

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
        <Button
          onClick={() => {
            logout();
          }}
          isLoading={logoutFetching}
          variant="ghost"
          mx={5}
          borderRadius="lg"
          color="#000a16"
          fontWeight={500}
          _hover={{ bg: "#DDB2FF", color: "#5E00AB", fontWeight: 600 }}
        >
          {" "}
          Logout{" "}
        </Button>

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
    </DrawerBody>
  );
}
