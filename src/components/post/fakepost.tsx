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
import { useTrendingPostsQuery } from "../../generated/graphql";
import moment from 'moment';
import PostInteraction from "../PostInteraction";

interface FakePostProps {}

const FakePost: React.FC<FakePostProps> = () => {
  const [{data}] = useTrendingPostsQuery({
    variables: {
      limit: 15,
      cursor: 0,
    },
  })
  

  const postVote = Math.floor(Math.random()*(200) + 1 );
  const comments = Math.floor(Math.random()* 30 + 1);
  return (
    <>    {!data ? (
      <Box borderRadius="md" bg="tan" px={3}>
        Nothing to see here
      </Box>
    ) : (
      data?.trendingPosts?.posts?.map((p) => (
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
              <Flex
                direction="row"
                justify="space-between"
                px={3}
              >
                <Flex px={2} pt={3}>
                  <Avatar
                    size="md"
                    src={p.creator.user?.profileImgUrl}
                  />
                  <Stack ml={3}>
                    <Text
                      fontSize={{ base: 14, md: 18 }}
                      fontWeight={600}
                      mb={-2}
                    >
                      {p.creator.user?.username}
                    </Text>
                    <Flex>
                      <Text fontSize="0.6rem" mr={2}>
                        Posted by {p.creator.user?.username}
                      </Text>
                      <Text fontSize="0.6rem">{moment(p.createdAt).fromNow()}</Text>
                    </Flex>
                  </Stack>
                  <Box>
                    <Badge
                      colorScheme="blue"
                      variant="outline"
                      ml={2}
                    >
                      POST
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
                <Heading as="h4" fontSize={24} fontWeight={500}>
                  {p.title}
                </Heading>
                <Box mt={4}>
                  <Text fontSize={16} fontWeight={300}>
                    {p.body}
                  </Text>
                </Box>
                {/* <Box maxW="md" maxH="md" overflow="hidden" borderRadius={30}>
<Image
  src={data?.getPost?.body ? data?.getPost?.body : null}
  alt={data?.getPost?.title ? null : data?.getPost?.title}
/>
</Box> */}
              </Stack>
              <Box maxW="full" maxH="lg" alignItems="center">
                <PostInteraction
                  postVote={p.voteCount}
                  comments={comments}
                />
              </Box>
            </Stack>
          </Box>
        </VStack>
      ))
    )}
    </>
  );
};

export default FakePost;

