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
import PostInteraction from "../PostInteraction";
import { CreatePost } from "./CreatePost";

interface FakePostProps {
  postData: any;
  // title: string;
  // img?: string;
  // user: string;
  // avatar: string;
  // createdAt: string;
  // flair: string;
  // group: string;
}

const FakePost: React.FC<FakePostProps> = ({ postData }) => {
  // const postprops = {
  //   imageUrl:
  //     "https://media.istockphoto.com/photos/multi_ethnic-teenagers-taking-a-self-portrait-stock-photo-picture-id1184216653?k=20&m=1184216653&s=612x612&w=0&h=T6xt_a6r-fmG0l3dzX-EHbVPQkJQeY-VX4zb7skIbPQ=",
  //   image2Url:
  //     "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  //   imageAlt: "A completely random image posted by user",
  //   upvotes: 400,
  //   comments: 20,
  //   title: "After class today, soo tired",
  //   title2: "Me and my gang 😎",
  //   fakeImage: "/fakeimages/fakeland.jpg",
  //   fakeTitle: "I spent 23hrs drawing this, hope y'all like it",
  //   fake2Image: "/fakeimages/trentvpep.jpg",
  //   fake2Title: "My two favorite people in soccer🥰🤩",
  // };
  const {
    title,
    imageUrl,
    imageAlt,
    user,
    avatar,
    createdAt,
    postFlair,
    flairColor,
    flairType,
    group,
  } = postData;

  const postVote = Math.floor(Math.random()*(200) + 1 );
  const comments = Math.floor(Math.random()* 30 + 1);
  return (
    <VStack spacing={{ base: 5, md: 5 }}>
      
      <Box
        borderWidth="1px"
        borderRadius="lg"
        bg="white"
        pb={8}
        w={{ base: "full", md: "xl" }}
        mb={5}
      >
        <Stack spacing={10}>
          <Flex direction="row" justify="space-between" px={3}>
            <Flex px={2} pt={3}>
              <Avatar size="md" src={avatar} />
              <Stack ml={3}>
                <Text fontSize={{ base: 14, md: 18 }} fontWeight={600} mb={-2}>
                  {group}
                </Text>
                <Flex>
                  <Text fontSize="0.6rem" mr={2}>
                    Posted by {user}
                  </Text>
                  <Text fontSize="0.6rem">{createdAt}</Text>
                </Flex>
              </Stack>
              <Box>
                <Badge colorScheme={flairColor} variant={flairType} ml={2}>
                  {postFlair}
                </Badge>
              </Box>
            </Flex>
            <Flex direction="row" justify="flex-end">
              <IconButton
                icon={<BsThreeDots />}
                variant="ghost"
                aria-label="More Options"
                mr={2}
                mt={1}
              />
            </Flex>
          </Flex>

          <Stack px={6}>
            <Heading as="h4" fontSize={24} fontWeight={400}>
              {title}
            </Heading>
            <Box maxW="md" maxH="md" overflow="hidden" borderRadius={30}>
              <Image
                src={imageUrl ? imageUrl : null}
                alt={imageAlt ? null : imageAlt}
                style={{ borderRadius: "30px" }}
              />
            </Box>
          </Stack>
          <Box maxW="full" maxH="lg" alignItems="center">
            <PostInteraction postVote={postVote} comments={comments}/>
          </Box>
        </Stack>
      </Box>
    </VStack>
  );
};

export default FakePost;
