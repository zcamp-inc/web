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
import PostInteraction from "../../components/PostInteraction"

function FakePost() {
  const postprops = {
    imageUrl:
      "https://media.istockphoto.com/photos/multi_ethnic-teenagers-taking-a-self-portrait-stock-photo-picture-id1184216653?k=20&m=1184216653&s=612x612&w=0&h=T6xt_a6r-fmG0l3dzX-EHbVPQkJQeY-VX4zb7skIbPQ=",
    image2Url: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    imageAlt: "A completely random image posted by user",
    upvotes: 400,
    comments: 20,
    title: "After class today, soo tired",
    title2: "Me and my gang 😎",
    fakeImage: '/fakeimages/fakeland.jpg',
    fakeTitle: "I spent 23hrs drawing this, hope y'all like it",
    fake2Image: '/fakeimages/trentvpep.jpg',
    fake2Title: 'My two favorite people in soccer🥰🤩',
  };

  return (
    <Stack spacing={{ base: 10, md: 10 }}>

<Box
      borderWidth="1px"
      borderRadius="lg"
      bg="white"
      pb={8}
      w={{ base: "full", md: 'xl' }}
      // _hover={{ bg: 'gray.100' }}
    >
      <Stack spacing={10}>
        <Box>
          <HStack px={2} pt={3}>
            <Avatar size="md" />
            <Stack ml={3}>
              <Text fontSize={18} fontWeight={600} mb={-2}>
                z/camp
              </Text>
              <HStack>
                <Text fontSize="0.6rem">Posted by this.user</Text>
                <Text fontSize="0.6rem">10 mins ago</Text>
              </HStack>
            </Stack>
            <Badge colorScheme="green" >Mood Flair</Badge>
            <Flex justifyContent="flex-end">
              <IconButton
                icon={<BsThreeDots />}
                variant="ghost"
                aria-label="More Options"
              />
            </Flex>
          </HStack>
        </Box>

        
        <Stack px={6}>
          <Heading as="h4" fontSize={24} fontWeight={400}>
            {postprops.fake2Title}
          </Heading>
          <Box maxW="lg" maxH="lg" overflow="hidden" borderRadius={30}>
            <Image
              src={postprops.fake2Image}
              alt={postprops.imageAlt}
              style={{ borderRadius: "30px" }}
            />
          </Box>
        </Stack>
        <Box maxW="lg" maxH="lg" overflow="hidden" alignItems='center'>
        <PostInteraction />
            
        </Box>
      </Stack>
    </Box>
<Box
      borderWidth="1px"
      borderRadius="lg"
      bg="white"
      pb={8}
      w={{ base: "full", md: 'xl' }}
      // _hover={{ bg: 'gray.100' }}
    >
      <Stack spacing={10}>
        <Box>
          <HStack px={2} pt={3}>
            <Avatar size="md" />
            <Stack ml={3}>
              <Text fontSize={18} fontWeight={600} mb={-2}>
                z/camp
              </Text>
              <HStack>
                <Text fontSize="0.6rem">Posted by this.user</Text>
                <Text fontSize="0.6rem">10 mins ago</Text>
              </HStack>
            </Stack>
            <Badge colorScheme="red" >Mood Flair</Badge>
            <Flex justifyContent="flex-end">
              <IconButton
                icon={<BsThreeDots />}
                variant="ghost"
                aria-label="More Options"
              />
            </Flex>
          </HStack>
        </Box>

        
        <Stack px={6}>
          <Heading as="h4" fontSize={24} fontWeight={400}>
            {postprops.fakeTitle}
          </Heading>
          <Box maxW="lg" maxH="lg" overflow="hidden" borderRadius={30}>
            <Image
              src={postprops.fakeImage}
              alt={postprops.imageAlt}
              style={{ borderRadius: "30px" }}
            />
          </Box>
        </Stack>
        <Box maxW="lg" maxH="lg" overflow="hidden" alignItems='center'>
        <PostInteraction />
            
        </Box>
      </Stack>
    </Box>

    <Box
      borderWidth="1px"
      borderRadius="lg"
      bg="white"
      pb={8}
      w={{ base: "full", md: 'xl' }}
      // _hover={{ bg: 'gray.100' }}
    >
      <Stack spacing={10}>
        <Box>
          <HStack px={2} pt={3}>
            <Avatar size="md" />
            <Stack ml={3}>
              <Text fontSize={18} fontWeight={600} mb={-2}>
                z/camp
              </Text>
              <HStack>
                <Text fontSize="0.6rem">Posted by this.user</Text>
                <Text fontSize="0.6rem">10 mins ago</Text>
              </HStack>
            </Stack>
            <Badge colorScheme="yellow" >Mood Flair</Badge>
            <Flex justifyContent="flex-end">
              <IconButton
                icon={<BsThreeDots />}
                variant="ghost"
                aria-label="More Options"
              />
            </Flex>
          </HStack>
        </Box>

        
        <Stack px={6}>
          <Heading as="h4" fontSize={24} fontWeight={400}>
            {postprops.title}... I just tried to smile a little
          </Heading>
          <Box maxW="lg" maxH="lg" overflow="hidden" borderRadius={30}>
            <Image
              src={postprops.image2Url}
              alt={postprops.imageAlt}
              style={{ borderRadius: "30px" }}
            />
          </Box>
        </Stack>
        <Box maxW="lg" maxH="lg" overflow="hidden" alignItems='center'>
        <PostInteraction />
            
        </Box>
      </Stack>
    </Box>

    <Box
      borderWidth="1px"
      borderRadius="lg"
      bg="white"
      pb={8}
      w={{ base: "full", md: "xl" }}
      // _hover={{ bg: 'gray.100' }}
    >
      <Stack spacing={10}>
        <Box>
          <HStack px={2} pt={3}>
            <Avatar size="md" />
            <Stack ml={3}>
              <Text fontSize={18} fontWeight={600} mb={-2}>
                z/camp
              </Text>
              <HStack>
                <Text fontSize="0.6rem">Posted by this.user</Text>
                <Text fontSize="0.6rem">10 mins ago</Text>
              </HStack>
            </Stack>
            <Badge colorScheme="pink" >Mood Flair</Badge>
            <Flex justifyContent="flex-end">
              <IconButton
                icon={<BsThreeDots />}
                variant="ghost"
                aria-label="More Options"
              />
            </Flex>
          </HStack>
        </Box>

        
        <Stack px={6}>
          <Heading as="h4" fontSize={24} fontWeight={400}>
            {postprops.title2}
          </Heading>
          <Box maxW="lg" maxH="lg" overflow="hidden" borderRadius={30}>
            <Image
              src={postprops.imageUrl}
              alt={postprops.imageAlt}
              style={{ borderRadius: "30px" }}
            />
          </Box>
        </Stack>
   
        <PostInteraction />            

      </Stack>
    </Box>


  





</Stack>
  );
}

export default FakePost;
