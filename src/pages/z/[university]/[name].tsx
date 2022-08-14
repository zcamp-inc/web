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
  Image,
  useToast,
} from "@chakra-ui/react";
import {
  IoGridOutline,
  IoRibbonOutline,
  IoInformationCircleOutline,
  IoCalendarOutline,
} from "react-icons/io5";
import { Layout } from "../../../components/Layout";
import GroupCard, { GroupData } from "../../../components/group/GroupCard";
import FakePost from "../../../components/post/fakepost";
import { useGetGroupFromUrl } from "../../../utils/getGroupFromUrl";
import CreateGPost from "../../../components/group/CreateGPost";
import { useGetGroupUserCountQuery, useJoinGroupMutation, useGetUserGroupsQuery } from "../../../generated/graphql";
import {useRouter} from "next/router";

const GroupProfile = () => {
  const [{ data }] = useGetGroupFromUrl();
  const [, join] = useJoinGroupMutation();
  const [{data: usergroup}] = useGetUserGroupsQuery();
  const toast = useToast()
  const router = useRouter()

  const GetGroup = usergroup?.getUserGroups?.map((groupe) => (groupe.id));
  const mygroupe = data?.getGroupByName?.group?.id!

  return (
    <Layout>
      <Flex direction="column" justify='space-between' align="center" w='full' >
        <Box
          w="full"
          h="200px"
          mt={-3}
          bg="tan"
          overflow='hidden'
        >
          <Image src={data?.getGroupByName?.group?.bannerImgUrl} alt='group_banner' w='full' h="450px" mt={{ base: 0, md: -20 }}/>
        </Box>

        <Flex justify="center" direction='column' w='full'>

        <Flex direction={{ base: 'column', md:"row"}} align="center" px={40} pb={2} mt={-12}  bg='white'>
          <Avatar
            src={data?.getGroupByName?.group?.logoImgUrl}
            w={{base: '120px', md: '120px'}} h={{ base: '100px', md: '120px'}}
            mr={{ md: 10, lg: 16 }}
            ml={{ md: 10, lg: 0 }}
            bg='white'
            mt={{ md: -7}}
            borderWidth="5px"
            borderColor='white'

          />
          <Flex direction="column" justify="space-between" mt={{ md: -10}}>
            <Flex direction={{ base: 'column', md: "row"}} justify="space-between" align="center" mt={10} pt={2}>
              <Heading fontSize={{ base: 20, md: 28 }} fontWeight={400} mr={{ md: 20, lg: 10 }}>
                {data?.getGroupByName?.group?.name}
              </Heading>
              <Flex direction="row" justify="flex-end">
                <Button minW="100px" h="30px" colorScheme="blue" fontWeight={400}
                variant={GetGroup?.includes(mygroupe) ? 'outline' : 'solid'}
                isDisabled=  { GetGroup?.includes(mygroupe) ? true : false } 
                  onClick={
                    async function(){
                      const response = await join({groupId: data?.getGroupByName.group?.id!});                  
                      if (response?.error){
                        toast({
                          title: 'Oopsies😭😭',
                          description: "We could not add you to the subcamp",
                          status: 'error',
                          duration: 6000,
                          isClosable: true,
                          variant:'left-accent'
                        });
                        return null;                      
                      }else{                      
                      toast({
                        title: "Cool🤩🤩",
                        description: `We have added you to ${data?.getGroupByName?.group?.name}`,
                        status: 'success',
                        duration: 6000,
                        isClosable: true,
                        variant:'subtle',
                      });
                      router.reload()
                    }
                    return response
                    }
                  }>
                    { GetGroup?.includes(mygroupe) ? 'Joined' : 'Join' }                
                </Button>
              </Flex>
            </Flex>
            <Text> z/CovenantUniversity</Text>

            <Flex direction="column">
              <Stack direction="row" spacing={10} mt={3}>
                <Text fontSize="1rem" fontWeight={400} mr={2}>
                  <b>10.2k</b> Upvotes
                </Text>
                <Box>
                <Badge bgGradient='linear(to-r, green.200, pink.500)' variant="solid">
                  L3 GROUP
                </Badge>
              </Box>
              </Stack>
              {/* <Box mt={5}>
                <Text>{data?.group?.group?.description}</Text>
              </Box> */}
            </Flex>
          </Flex>
        </Flex>

        <Flex direction='row' justify='center'>
          
          <Flex direction="column" mt={5}>
            <Box
              mb={5}
              alignSelf="center"
              w={{ base: "370px", md: "768px", lg: "600px" }}
            >
              <CreateGPost pageProps={undefined} />
            </Box>


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
                  mr={{ base: -8, md: 1 }} 
                  ml={{ base: -8 }}    
                  px={1}             
                >
                  <IconButton
                    icon={<IoGridOutline />}
                    borderRadius="md"
                    fontSize={{ base: 16, md: 22 }}
                    // _groupHover={{ color: "#5E00AB", bg: "#DDB2FF" }}
                    _hover={{ color: "none", bg: "none" }}
                    aria-label="Home"
                    variant="ghost"
                  />
                  <Text ml={{ base: -2, md: "1"}} pr={{ base: -1, md: 1}} fontSize={{ base: 16, md: 18}}>
                    Best
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
                  mr={{ base: -8, md: 2 }}                  
                >
                  <IconButton
                    icon={<IoRibbonOutline />}
                    borderRadius="md"
                    fontSize={{ base: 16, md: 22 }}
                    // _groupHover={{ color: "#5E00AB", bg: "#DDB2FF" }}
                    _hover={{ color: "none", bg: "none" }}
                    aria-label="Home"
                    variant="ghost"
                  />
                  <Text ml={{ base: -2, md: 1}} pr={1} fontSize={{ base: 16, md: 18}}>
                   Recent
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
                  mr={{ base: -8, md: 2 }}

                 
                >
                  <IconButton
                    icon={<IoInformationCircleOutline />}
                    borderRadius="md"
                    fontSize={{ base: 16, md: 22 }}
                    // _groupHover={{ color: "#5E00AB", bg: "#DDB2FF" }}
                    _hover={{ color: "none", bg: "none" }}
                    aria-label="Home"
                    variant="ghost"
                  />
                  <Text ml={{ base: -2, md: 1}} pr={1} fontSize={{ base: 16, md: 18}}>
                    Important
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
                    icon={<IoCalendarOutline />}
                    borderRadius="md"
                    fontSize={{ base: 16, md: 22 }}
                    // _groupHover={{ color: "#5E00AB", bg: "#DDB2FF" }}
                    _hover={{ color: "none", bg: "none" }}
                    aria-label="Home"
                    variant="ghost"
                  />
                  <Text ml={{ base: -2}} pr={1} fontSize={{ base: 16, md: 18}}>
                    Events
                  </Text>
                </Flex>
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                
                  <FakePost />
              
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

          <Box display={{ base: "none", lg: "block" }} ml={5} mt={5}>
            <GroupCard />
          </Box>
         </Flex> 
        </Flex>
      </Flex>
    </Layout>
  );
};

export default GroupProfile;

const MemberCount = () => {
  const findGroup = GroupData();
  const [{ data }] = useGetGroupUserCountQuery({
    variables: {
      groupId: findGroup?.getGroupByName?.group?.id!,
    },
  });

  return data;
};

