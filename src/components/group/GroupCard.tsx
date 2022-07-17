import {
  Box,
  Flex,
  Heading,
  Text,
  HStack,
  Badge,
  Button,
  VStack,
  Stack,
  Link,
  Divider,
  Avatar,
  AvatarBadge,
  Icon,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  ListItem,
  UnorderedList,
  IconButton,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useGetGroupFromUrl } from "../../utils/getGroupFromUrl";
import { TopGroups } from "../TopGroups";
import { HiOutlineCake } from "react-icons/hi";
import { useGetGroupUserCountQuery } from "../../generated/graphql";
import { IoLogoInstagram, IoLogoFacebook, IoLogoYoutube, IoLinkOutline } from "react-icons/io5";
import { useRouter } from "next/router";

export default function GroupCard() {
  const router = useRouter();
  const thisGroup = GroupData();
  const monthshort = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  let d = new Date(thisGroup?.group?.group?.createdAt);
  let day = d.getDate();
  let month = monthshort[d.getMonth()];
  let year = d.getFullYear();

  const members = MemberCount();

  return (
    <Stack spacing={4} direction="column">
      <Box borderRadius="10px" px={1} pt={1} mb={3}>
        <Box bg="white" borderRadius="10px" pb={3} w={80}>
          <Flex
            borderRadius="10px 10px 0 0"
            px={4}
            bgGradient="linear(to-r, #7928CA, #57FFF5)"
          >
            <Text fontSize={20} color="white">
              About Group
            </Text>
          </Flex>
          <Flex px={4} mt={2} direction="column">
            <Text color="#000a16" fontWeight={400} fontSize={14} w={56}>
              {thisGroup?.group?.group?.description}
            </Text>

            <Stack direction="row" spacing={10} mt={3} mb={3}>
              <Text fontSize="1rem" fontWeight={400} mr={2}>
                <b> {members?.getGroupUserCount} </b>{" "}
                <Text fontSize="1rem" fontWeight={400}>
                  {members?.getGroupUserCount! > 1 ? "Members" : "Member"}
                </Text>
              </Text>

              <Text fontSize="1rem" mr={2}>
                <b>103</b> Posts
              </Text>
              <Box>
                <Badge
                  bgGradient="linear(to-r, green.200, pink.500)"
                  variant="solid"
                >
                  L3 GROUP
                </Badge>
              </Box>
            </Stack>

            <Divider mb={3} />
            <Flex direction="row" align="center">
              <Icon as={HiOutlineCake} mr={2} />

              <Text>
                Created on {month} {day}, {year}{" "}
              </Text>
            </Flex>
          </Flex>

          <Button
            w={60}
            color="#2b6cb0"
            borderColor="#2b6cb0"
            variant="outline"
            _hover={{
              bgGradient: "linear(to-r, #7928CA, #57FFF5)",
              textColor: "#000A16",
              borderColor: "white",
            }}
            ml={4}
            mt={2}
          >
            Create Post
          </Button>

          <Divider mt={3} />

          <Accordion allowToggle borderRadius="md" mt={3}>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left" borderRadius="md">
                  Group Rules
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <UnorderedList>
                  <ListItem>Lorem ipsum dolor sit amet</ListItem>
                  <ListItem>Consectetur adipiscing elit</ListItem>
                  <ListItem>Integer molestie lorem at massa</ListItem>
                  <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                </UnorderedList>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <Box px={4} mt={2}>
            <Text>Social Links</Text>

            <Flex
              align="center"
              borderRadius="md"
              role="group"
              cursor="pointer"
              _hover={{
                bg: "gray.200",
              }}
              mr={{ base: 0, md: 2 }}
              onClick={() =>window.open('https://covenantuniversity.edu.ng', '_blank')}
            >
              <IconButton
                icon={<IoLinkOutline />}
                borderRadius="md"
                fontSize={{ base: 24, md: 26 }}
                // _groupHover={{ color: "#5E00AB", bg: "#DDB2FF" }}
                _hover={{ color: "none", bg: "none" }}
                aria-label="Home"
                variant="ghost"
              />
              <Text ml="1" pr={2}>
                Website
              </Text>
            </Flex>


            <Flex
              align="center"
              borderRadius="md"
              role="group"
              cursor="pointer"
              _hover={{
                bg: "gray.200",
              }}
              mr={{ base: 0, md: 2 }}
              onClick={() => window.open('https://instagram.com', '_blank')}
            >
              <IconButton
                icon={<IoLogoInstagram />}
                borderRadius="md"
                fontSize={{ base: 24, md: 26 }}
                // _groupHover={{ color: "#5E00AB", bg: "#DDB2FF" }}
                _hover={{ color: "none", bg: "none" }}
                aria-label="Home"
                variant="ghost"
              />
              <Text ml="1" pr={2}>
                Instagram
              </Text>
            </Flex>

            <Flex
              align="center"
              borderRadius="md"
              role="group"
              cursor="pointer"
              _hover={{
                bg: "gray.200",
              }}
              mr={{ base: 0, md: 2 }}
              onClick={() =>window.open('https://facebook.com', '_blank')}
            >
              <IconButton
                icon={<IoLogoFacebook />}
                borderRadius="md"
                fontSize={{ base: 24, md: 26 }}
                // _groupHover={{ color: "#5E00AB", bg: "#DDB2FF" }}
                _hover={{ color: "none", bg: "none" }}
                aria-label="Home"
                variant="ghost"
              />
              <Text ml="1" pr={2}>
                Facebook
              </Text>
            </Flex>

            <Flex
              align="center"
              borderRadius="md"
              role="group"
              cursor="pointer"
              _hover={{
                bg: "gray.200",
              }}
              mr={{ base: 0, md: 2 }}
              onClick={() =>window.open('https://youtube.com', '_blank')}
            >
              <IconButton
                icon={<IoLogoYoutube />}
                borderRadius="md"
                fontSize={{ base: 24, md: 26 }}
                // _groupHover={{ color: "#5E00AB", bg: "#DDB2FF" }}
                _hover={{ color: "none", bg: "none" }}
                aria-label="Home"
                variant="ghost"
              />
              <Text ml="1" pr={2}>
                Youtube
              </Text>
            </Flex>

           
          </Box>
        </Box>
      </Box>

      <TopGroups />

      <Box borderRadius="10px" px={1} pt={1} mb={3}>
        <Box bg="#000a16" borderRadius="10px" pb={3} w={80}>
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
              color="#000a16"
              bg="#57FFF5"
              _hover={{ bg: "#57FFF5", color: "#000a16" }}
            >
              Create Post
            </Button>
            <Button
              w={40}
              variant="outline"
              color="#57FFF5"
              borderColor="#57FFF5"
              _hover={{ bg: "#57FFF5", color: "#000a16" }}
            >
              Create Subcamp
            </Button>
          </VStack>
        </Box>
      </Box>

      <Flex borderRadius="10px" px={1}>
        <Box bg="white" borderRadius="10px" pb={3} w={80}>
          <Flex borderRadius="10px 10px 0 0">
            <img src="/WAVYHOME.png" width="100%" />
          </Flex>
          <Flex ml={5} mt={2}>
            <Text color="#000a16" fontWeight={400} fontSize={14} w={56}>
              ZCAMP Guildlines and Privacy Policies
            </Text>
          </Flex>
          <NextLink href="/" passHref>
            <Link textDecoration="none">
              {" "}
              <Text color="#000a16" align="center">
                Privacy Policy
              </Text>
            </Link>
          </NextLink>
        </Box>
      </Flex>
    </Stack>
  );
}

export const GroupData = () => {
  const [{ data, error }] = useGetGroupFromUrl();
  return data;
};
const MemberCount = () => {
  const findGroup = GroupData();
  const [{ data }] = useGetGroupUserCountQuery({
    variables: {
      groupId: findGroup?.group?.group?.id!,
    },
  });

  return data;
};
