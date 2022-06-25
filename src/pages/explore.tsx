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
} from "@chakra-ui/react";
import NextLink from "next/link";
import { data } from "../../data";
import { Layout } from "../components/Layout";
import FakePost from "../components/post/fakepost";
import RightCard from "../components/RightCard";

interface ExploreProps {}

const Explore: React.FC<ExploreProps> = () => {
  return (
    <Layout>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={{ md: 10 }}
        ml={10}
        mt={20}
      >
        <Flex direction="column" ml={{ base: -10, md: -20 }}>
          <Flex position="absolute" direction="column" top="5" ml={-28}>
            <Heading>List of featured universities</Heading>
            <Flex direction="row">
              <Box maxW={60} borderWidth="1px" borderRadius="10px" ml={5} bg='white'>
                <Box
                  h={28}
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
                    mt="1"
                  >
                    M.I.T
                  </Box>

                  <Box fontWeight="regular" lineHeight="tight" noOfLines={1}>
                    The Description of the university goes here, so I made this
                    long for no reason
                  </Box>
                </Box>
              </Box>

              <Box maxW={60} borderWidth="1px" borderRadius="10px" ml={5} bg="white">
                <Box
                  h={28}
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

                <Box px={2} py={3}>
                  <Box display="flex" alignItems="baseline">
                    <Badge borderRadius="full" px="2" colorScheme="teal">
                      New
                    </Badge>
                  </Box>
                  <Box
                    fontWeight="bold"
                    as="h4"
                    lineHeight="tight"
                    noOfLines={1}
                    mt="1"
                  >
                    Covenant University
                  </Box>

                  <Box fontWeight="regular" lineHeight="tight" noOfLines={1}>
                    The Description of the university goes here, so I made this
                    long for no reason
                  </Box>
                </Box>
              </Box>

              <Box maxW={60} borderWidth="1px" borderRadius="10px" ml={5} bg="white">
                <Box
                  h={28}
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
                    h="full"
                    w='full'
                    opacity={0.6}
                  />
                </Box>

                <Box px={2} py={3}>
                  <Box display="flex" alignItems="baseline">
                    <Badge borderRadius="full" px="2" colorScheme="teal">
                      New
                    </Badge>
                  </Box>
                  <Box
                    fontWeight="bold"
                    as="h4"
                    lineHeight="tight"
                    noOfLines={1}
                    mt="1"
                  >
                    Babcock University
                  </Box>

                  <Box fontWeight="regular" lineHeight="tight" noOfLines={1}>
                    The Description of the university goes here, so I made this
                    long for no reason
                  </Box>
                </Box>
              </Box>

              <Box maxW={60} borderWidth="1px" borderRadius="10px" ml={5} bg="white">
                <Box
                  h={28}
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
                    h="full"
                    w="full"
                    opacity={0.6}
                  />
                </Box>

                <Box px={2} py={3}>
                  <Box display="flex" alignItems="baseline">
                    <Badge borderRadius="full" px="2" colorScheme="teal">
                      New
                    </Badge>
                  </Box>
                  <Box
                    fontWeight="bold"
                    as="h4"
                    lineHeight="tight"
                    noOfLines={1}
                    mt="1"
                  >
                    University of Ibadan
                  </Box>

                  <Box fontWeight="regular" lineHeight="tight" noOfLines={1}>
                    The Description of the university goes here, so I made this
                    long for no reason
                  </Box>
                </Box>
              </Box>
            </Flex>
          </Flex>

          <Tabs isFitted mt={40}>
            <TabList>
              <Tab>For You</Tab>
              <Tab>Important</Tab>
              <Tab>Events</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                {data.map((postData, i) => (
                  <FakePost postData={postData} key={i} />
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
        <Box display={{ base: "none", md: "block" }} mt={40}>
          <RightCard />
        </Box>
      </SimpleGrid>
    </Layout>
  );
};

export default Explore;
