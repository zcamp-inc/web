import {
  Box,
  Image,
  Badge,
  Text,
  Flex,
  Stack,
  Avatar,
  VStack,
  HStack,
  Heading,
  IconButton,
} from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";

function FakePost() {
  const postprops = {
    imageUrl:
      "https://media.istockphoto.com/photos/multi_ethnic-teenagers-taking-a-self-portrait-stock-photo-picture-id1184216653?k=20&m=1184216653&s=612x612&w=0&h=T6xt_a6r-fmG0l3dzX-EHbVPQkJQeY-VX4zb7skIbPQ=",
    image2Url:
      "https://64.media.tumblr.com/3cd341e5f1dc67750b72fba43cdd8da9/773f12d6d9174824-8b/s1280x1920/570c18a42e7dd7a12f7f1712a6cf24409c94b4e3.jpg",
    imageAlt: "A completely random image posted by user",
    upvotes: 400,
    comments: 20,
    title: "Was tired today after classes",
  };

  return (
    <Stack spacing={10}>
    <Box
      borderWidth="1px"
      borderRadius="lg"
      bg="white"
      pb={10}
      w={{ base: "full", md: "90vh" }}
    >
      <Stack spacing={10}>
        <Box>
          <HStack px={6} pt={3} spacing={2}>
            <Avatar size="md" />
            <Stack ml={3}>
              <Text fontSize={20} fontWeight={600}>
                z/camp
              </Text>
              <HStack>
                <Text fontSize="0.8rem">Posted by this.user</Text>
                <Text fontSize="0.8rem">10 mins ago</Text>
              </HStack>
            </Stack>
            <Badge colorScheme="red">Mood Flair</Badge>
            <Flex justifyContent="flex-end">
              <IconButton
                icon={<BsThreeDots />}
                variant="ghost"
                aria-label="More Options"
              />
            </Flex>
          </HStack>
        </Box>

        {/* This is where the posts will be */}
        <Stack px={6}>
          <Heading as="h4" fontSize={24}>
            {postprops.title}
          </Heading>
          <Box maxW="lg" maxH="lg" overflow="hidden" borderRadius={30}>
            <Image
              src={postprops.image2Url}
              alt={postprops.imageAlt}
              style={{ borderRadius: "30px" }}
            />
          </Box>
        </Stack>
      </Stack>
    </Box>

    <Box
      borderWidth="1px"
      borderRadius="lg"
      bg="white"
      pb={10}
      w={{ base: "full", md: "90vh" }}
    >
      <Stack spacing={10}>
        <Box >
          <HStack px={6} pt={3} spacing={2}>
            <Avatar size="md" />
            <Stack ml={3}>
              <Text fontSize={20} fontWeight={600}>
                z/camp
              </Text>
              <HStack>
                <Text fontSize="0.8rem">Posted by this.user</Text>
                <Text fontSize="0.8rem">10 mins ago</Text>
              </HStack>
            </Stack>
            <Badge colorScheme="red">Mood Flair</Badge>
            <Flex justifyContent="flex-end">
              <IconButton
                icon={<BsThreeDots />}
                variant="ghost"
                aria-label="More Options"
              />
            </Flex>
          </HStack>
        </Box>

        {/* This is where the posts will be */}
        <Stack px={6}>
          <Heading as="h4" fontSize={24}>
            {postprops.title}, and I had to go to chapel immediately for rehearsals
          </Heading>
          {/* <Box maxW="lg" maxH="lg" overflow="hidden" borderRadius={30}>
            <Image
              src=""
              style={{ borderRadius: "30px" }}
            />
          </Box> */}
        </Stack>
      </Stack>
    </Box>


</Stack>
  );
}

export default FakePost;
