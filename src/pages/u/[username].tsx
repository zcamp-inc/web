import {
  Box,
  Flex,
  Avatar,
  Badge,
  Stack,
  Button,
  Heading,
  Text,
  IconButton,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  SimpleGrid,
} from "@chakra-ui/react";
import { IoGridOutline, IoChatbubbleEllipsesOutline, IoBookmarksOutline, IoCaretUpCircleOutline } from "react-icons/io5";
import { Layout } from "../../components/Layout";
import UserCard from "../../components/user/UserCard";
import FakePost from "../../components/post/fakepost";
import { useGetUserFromUrl } from "../../utils/getUserFromUrl";
import { fakedata } from "../../../data";

const UserProfile = () => {
  const [{ data, error }] = useGetUserFromUrl()

  return (
    <Layout>
      <Flex direction='column' align='center'>
      <Flex direction='row' justify='space-between' align='center' ml={-80} mr={-10} >
        <Avatar src={data?.user?.user?.profileImgUrl} w='170px' h='170px' mr={24}  background={'linear-gradient(#fff, #fff) padding-box, linear-gradient(to right, #5E00AB, #57FFF5) border-box'} border="3px solid transparent" />
        <Flex direction="column" justify="space-between">
          <Flex direction="row" justify="space-between" align='center' mt={6}>
            <Heading fontSize={{ base: 14, md: 28 }} fontWeight={400} mr={2}>
              {data?.user?.user?.username}
            </Heading>
            <Flex direction="row" justify="end">
              <Button size="sm" colorScheme="blue" fontWeight={400}>
                Edit Profile
              </Button>
            </Flex>
          </Flex>

          <Flex direction="column">
          <Stack direction='row' spacing={10} mt={3}>
              <Text fontSize="1rem" fontWeight={400} mr={2}>
                <b>100k</b> Upvotes
              </Text>

              <Text fontSize="1rem" mr={2}>
                <b>103</b> Points
              </Text>            
            <Box>
              <Badge colorScheme="yellow" variant="solid">
                L1 USER
              </Badge>
            </Box>            
          </Stack>
          <Box mt={5}>
          <Text>{data?.user?.user?.email}</Text>
          <Text fontWeight='light'>Steady thinking about deez noughts</Text>

          </Box>
          </Flex>
        </Flex>
        </Flex>

        <Flex justify="center">

        <Flex direction="column" ml={{ base: -10, md: -20 }}>
         <Tabs isFitted variant="unstyled" alignSelf='center'w={{ base: "370px", md: "768px", lg: "600px" }}
>
            <TabList
              bg="white"
              mb={3}
              borderRadius="md"
              fontWeight={600}
              color="gray.500"
            >
              <Tab _selected={{ color: "#ff3333" }}>
                <Flex
                  align="center"
                  borderRadius="md"
                  role="group"
                  cursor="pointer"
                  _hover={{
                    bg: "gray.200",
                  }}
                  mr={{ base: -2, md: 1 }} 
                  ml={{ base: -5 }}    
                  px={1}             
                >
                  <IconButton
                    icon={<IoGridOutline />}
                    borderRadius="md"
                    fontSize={{ base: 20, md: 22 }}
                    // _groupHover={{ color: "#5E00AB", bg: "#DDB2FF" }}
                    _hover={{ color: "none", bg: "none" }}
                    aria-label="Home"
                    variant="ghost"
                  />
                  <Text ml="1" pr={{ base: 0, md: 1}} fontSize={{ base: 16, md: 18}}>
                    Posts
                  </Text>
                </Flex>
              </Tab>

              <Tab _selected={{ color: "#8225CE"}}>
              <Flex
                  align="center"
                  borderRadius="md"
                  role="group"
                  cursor="pointer"
                  _hover={{
                    bg: "gray.200",
                  }}
                  mr={{ base: -2, md: 2 }}                  
                >
                  <IconButton
                    icon={<IoChatbubbleEllipsesOutline />}
                    borderRadius="md"
                    fontSize={{ base: 20, md: 22 }}
                    // _groupHover={{ color: "#5E00AB", bg: "#DDB2FF" }}
                    _hover={{ color: "none", bg: "none" }}
                    aria-label="Home"
                    variant="ghost"
                  />
                  <Text ml="1" pr={1} fontSize={{ base: 16, md: 18}}>
                   Comments
                  </Text>
                </Flex>
              </Tab>

              <Tab _selected={{ color: 'blue'}}>
              <Flex
                  align="center"
                  borderRadius="md"
                  role="group"
                  cursor="pointer"
                  _hover={{
                    bg: "gray.200",
                  }}
                  mr={{ base: -2, md: 2 }}

                 
                >
                  <IconButton
                    icon={<IoBookmarksOutline />}
                    borderRadius="md"
                    fontSize={{ base: 20, md: 22 }}
                    // _groupHover={{ color: "#5E00AB", bg: "#DDB2FF" }}
                    _hover={{ color: "none", bg: "none" }}
                    aria-label="Home"
                    variant="ghost"
                  />
                  <Text ml="1"pr={1} fontSize={{ base: 16, md: 18}}>
                    Saved
                  </Text>
                </Flex>
              </Tab>

              <Tab _selected={{ color: 'blue'}}>
              <Flex
                  align="center"
                  borderRadius="md"
                  role="group"
                  cursor="pointer"
                  _hover={{
                    bg: "gray.200",
                  }}
                  mr={{ base: -2, md: 2 }}

                 
                >
                  <IconButton
                    icon={<IoCaretUpCircleOutline />}
                    borderRadius="md"
                    fontSize={{ base: 20, md: 22 }}
                    // _groupHover={{ color: "#5E00AB", bg: "#DDB2FF" }}
                    _hover={{ color: "none", bg: "none" }}
                    aria-label="Home"
                    variant="ghost"
                  />
                  <Text ml="1"pr={1} fontSize={{ base: 16, md: 18}}>
                    Upvoted
                  </Text>
                </Flex>
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                {fakedata.map((postData, i) => (
                  <FakePost key={i} />
                ))}
              </TabPanel>
              <TabPanel>
                <Heading>No Important Posts for now</Heading>
              </TabPanel>
              <TabPanel>
                <Heading>No Events for now</Heading>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
        <Box display={{ base: "none", md: "block" }} ml={5}>
          <UserCard />
        </Box>
      </Flex>
        </Flex>
      
    </Layout>
  );
};

export default UserProfile;
