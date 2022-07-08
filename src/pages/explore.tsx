import {
  Box,
  Button,
  ChakraProvider,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  SimpleGrid,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Badge,
  IconButton,
} from "@chakra-ui/react";
import NextLink from "next/link";
import router from "next/router";
import {
  IoHeartCircleOutline,
  IoFlame,
  IoNotificationsCircleOutline,
} from "react-icons/io5";
import { data } from "../../data";
import { Layout } from "../components/Layout";
import FakePost from "../components/post/fakepost";
import RightCard from "../components/RightCard";

interface ExploreProps {}

const Explore: React.FC<ExploreProps> = () => {
  return (
    <Layout>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ md: 10 }} mt={20}>
        <Flex direction="column" ml={{ base: -10, md: -20 }}>
          <Flex position="absolute" direction="column" top="20" ml={-10}>
            <Flex direction="row">
              <Box
                maxW={40}
                maxH={40}
                borderWidth="1px"
                borderRadius="10px"
                ml={7}
                mr={3}
                bg="white"
                overflow="hidden"
              >
                <Box
                  overflow="hidden"
                  objectFit="cover"
                  borderRadius="10px 10px 0 0"
                  bg="gray.800"
                >
                  <Image
                    src="https://www.science.org/do/10.1126/science.aav7395/abs/MIT_16x9_0.jpg"
                    alt="logo_img"
                    borderRadius="10px 10px 0 0"
                    top="0"
                    h="full"
                    w="full"
                    opacity={0.6}
                  />
                </Box>

                <Box p={2}>
                  <Box
                    fontWeight="bold"
                    as="h4"
                    lineHeight="tight"
                    noOfLines={1}
                    mt={-2}
                  >
                    <Text fontSize={14}>M.I.T</Text>
                  </Box>

                  <Box fontWeight="regular" lineHeight="tight" noOfLines={2}>
                    <Text fontSize={12}>
                      The Description of the university goes here, so I made
                      this long for no reason
                    </Text>
                  </Box>
                </Box>
              </Box>

              <Box
                maxW={40}
                maxH={40}
                borderWidth="1px"
                borderRadius="10px"
                ml={5}
                mr={3}
                bg="white"
                overflow="hidden"
              >
                <Box
                  overflow="hidden"
                  objectFit="cover"
                  borderRadius="10px 10px 0 0"
                  bg="gray.800"
                >
                  <Image
                    src="https://covenantuniversity.edu.ng/images/2021/02/08/whatsapp-image-2020-06-19-at-11.53.07-am.jpeg"
                    alt="logo_img"
                    borderRadius="10px 10px 0 0"
                    top="0"
                    h="full"
                    w="full"
                    opacity={0.6}
                  />
                </Box>

                <Box p={2}>
                  <Box
                    fontWeight="bold"
                    as="h4"
                    lineHeight="tight"
                    noOfLines={1}
                    mt={-2}
                  >
                    <Text fontSize={14}>Covenant University</Text>
                  </Box>

                  <Box fontWeight="regular" lineHeight="tight" noOfLines={2}>
                    <Text fontSize={12}>
                      The Description of the university goes here, so I made
                      this long for no reason
                    </Text>
                  </Box>
                </Box>
              </Box>

              <Box
                maxW={40}
                maxH={40}
                borderWidth="1px"
                borderRadius="10px"
                ml={5}
                mr={3}
                bg="white"
                overflow="hidden"
              >
                <Box
                  overflow="hidden"
                  objectFit="cover"
                  borderRadius="10px 10px 0 0"
                  bg="gray.800"
                >
                  <Image
                    src="https://www.propertypro.ng/blog/wp-content/uploads/2018/04/babcock-university-600x405.jpg"
                    alt="logo_img"
                    borderRadius="10px 10px 0 0"
                    top="0"
                    h="90px"
                    w="full"
                    opacity={0.6}
                  />
                </Box>

                <Box p={2}>
                  <Box
                    fontWeight="bold"
                    as="h4"
                    lineHeight="tight"
                    noOfLines={1}
                    mt={-2}
                  >
                    <Text fontSize={14}>Babcock University</Text>
                  </Box>

                  <Box fontWeight="regular" lineHeight="tight" noOfLines={2}>
                    <Text fontSize={12}>
                      The Description of the university goes here, so I made
                      this long for no reason
                    </Text>
                  </Box>
                </Box>
              </Box>

              <Box
                maxW={40}
                maxH={40}
                borderWidth="1px"
                borderRadius="10px"
                ml={5}
                mr={3}
                bg="white"
                overflow="hidden"
              >
                <Box
                  overflow="hidden"
                  objectFit="cover"
                  borderRadius="10px 10px 0 0"
                  bg="gray.800"
                >
                  <Image
                    src="https://i0.wp.com/media.premiumtimesng.com/wp-content/files/2020/11/1500x500.jpg?resize=1140%2C500&ssl=1"
                    alt="logo_img"
                    borderRadius="10px 10px 0 0"
                    top="0"
                    h="90px"
                    w="full"
                    opacity={0.6}
                  />
                </Box>

                <Box p={2}>
                  <Box
                    fontWeight="bold"
                    as="h4"
                    lineHeight="tight"
                    noOfLines={1}
                    mt={-2}
                  >
                    <Text fontSize={14}>University of Ibadan</Text>
                  </Box>

                  <Box fontWeight="regular" lineHeight="tight" noOfLines={2}>
                    <Text fontSize={12}>
                      The Description of the university goes here, so I made
                      this long for no reason
                    </Text>
                  </Box>
                </Box>
              </Box>
              <Box
                maxW={40}
                maxH={40}
                borderWidth="1px"
                borderRadius="10px"
                ml={5}
                bg="white"
                overflow="hidden"
              >
                <Box
                  overflow="hidden"
                  objectFit="cover"
                  borderRadius="10px 10px 0 0"
                  bg="gray.800"
                >
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Redeemer%27s_University.jpg"
                    alt="logo_img"
                    borderRadius="10px 10px 0 0"
                    top="0"
                    h="90px"
                    w="full"
                    opacity={0.6}
                  />
                </Box>

                <Box p={2}>
                  <Box
                    fontWeight="bold"
                    as="h4"
                    lineHeight="tight"
                    noOfLines={1}
                    mt={-2}
                  >
                    <Text fontSize={14}>Redeemers University</Text>
                  </Box>

                  <Box fontWeight="regular" lineHeight="tight" noOfLines={2}>
                    <Text fontSize={12}>
                      The Description of the university goes here, so I made
                      this long for no reason
                    </Text>
                  </Box>
                </Box>
              </Box>
            </Flex>
          </Flex>

          <Tabs isFitted variant="unstyled" mt={40}>
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
                  mr={{ base: 0, md: 2 }}
                >
                  <IconButton
                    icon={<IoHeartCircleOutline />}
                    borderRadius="md"
                    fontSize={{ base: 24, md: 26 }}
                    // _groupHover={{ color: "#5E00AB", bg: "#DDB2FF" }}
                    _hover={{ color: "none", bg: "none" }}
                    aria-label="Home"
                    variant="ghost"
                  />
                  <Text ml="1" pr={2}>
                    For You
                  </Text>
                </Flex>
              </Tab>

              <Tab _selected={{ color: "#8225CE" }}>
                <Flex
                  align="center"
                  borderRadius="md"
                  role="group"
                  cursor="pointer"
                  _hover={{
                    bg: "gray.200",
                  }}
                  mr={{ base: 0, md: 2 }}
                >
                  <IconButton
                    icon={<IoFlame />}
                    borderRadius="md"
                    fontSize={{ base: 24, md: 26 }}
                    // _groupHover={{ color: "#5E00AB", bg: "#DDB2FF" }}
                    _hover={{ color: "none", bg: "none" }}
                    aria-label="Home"
                    variant="ghost"
                  />
                  <Text ml="1" pr={2}>
                    Hot Trends
                  </Text>
                </Flex>
              </Tab>

              <Tab _selected={{ color: "blue" }}>
                <Flex
                  align="center"
                  borderRadius="md"
                  role="group"
                  cursor="pointer"
                  _hover={{
                    bg: "gray.200",
                  }}
                  mr={{ base: 0, md: 2 }}
                >
                  <IconButton
                    icon={<IoNotificationsCircleOutline />}
                    borderRadius="md"
                    fontSize={{ base: 24, md: 26 }}
                    // _groupHover={{ color: "#5E00AB", bg: "#DDB2FF" }}
                    _hover={{ color: "none", bg: "none" }}
                    aria-label="Home"
                    variant="ghost"
                  />
                  <Text ml="1" pr={2}>
                    Events
                  </Text>
                </Flex>
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Flex justify="center">
                  <Heading
                    fontSize={30}
                    alignContent="center"
                    bgGradient="linear(to-l, #7928CA, #FF0080)"
                    bgClip="text"
                  >
                    No Posts for now
                  </Heading>
                </Flex>
                {data.map((postData, i) => (
                  <FakePost postData={postData} key={i} />
                ))}
              </TabPanel>
              <TabPanel>
                <Flex justify="center">
                  <Heading
                    fontSize={30}
                    alignContent="center"
                    bgGradient="linear(to-l, #7928CA, #FF0080)"
                    bgClip="text"
                  >
                    No Hot Trends for now
                  </Heading>
                </Flex>
                {data.map((postData, i) => (
                  <FakePost postData={postData} key={i} />
                ))}
              </TabPanel>
              <TabPanel>
                <Flex justify="center">
                  <Heading
                    fontSize={30}
                    alignContent="center"
                    bgGradient="linear(to-l, #7928CA, #FF0080)"
                    bgClip="text"
                  >
                    No Events for now
                  </Heading>
                </Flex>
                {data.map((postData, i) => (
                  <FakePost postData={postData} key={i} />
                ))}
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
        <Box display={{ base: "none", md: "block" }} mt={40}>
          <RightCard />
        </Box>
      </SimpleGrid>
    </Layout>
  );
};

export default Explore;
