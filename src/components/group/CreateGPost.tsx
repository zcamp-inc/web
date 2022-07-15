import {
    Box,
    Flex,
    IconButton,
    Avatar,
    AvatarBadge,
    Input,
    Text,
    Stack,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Heading,
    Textarea,
    Select,
    ChakraProvider,
  } from "@chakra-ui/react";
  import { Form, Formik } from "formik";
  import { useRouter } from "next/router";
  import React from "react";
  import {  IoImageOutline, IoLinkOutline } from "react-icons/io5";
  import {
    useCreatePostMutation,
    useMeQuery,
    useTopGroupsQuery
  } from "../../generated/graphql";
  import { InputField } from "../InputField";
  import { createUrqlClient } from "../../utils/createUrqlClient";
  import { withUrqlClient } from "next-urql";
  interface CreateGPostProps {}
  
  const CreateGPost: React.FC<CreateGPostProps> = () => {
    const {
      isOpen: isTextOpen,
      onOpen: onTextOpen,
      onClose: onTextClose,
    } = useDisclosure();
  
    const router = useRouter();
    const [{ data, fetching }] = useMeQuery();
    const [value, setValue] = React.useState("");
    const [gId, setGId ] = React.useState(1);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
      setValue(event.target.value);
  
    const [, createpost] = useCreatePostMutation();
    const UserGroup = GetUserGroup();
  
    let create = null;
    if (fetching) {
      create;
    } else if (!data?.me?.user) {
      create = (
        <>
          <Box
            borderWidth="1px"
            borderRadius="lg"
            bgImage={"/newuser.png"}
            pb={8}
            w={{ base: "full", md: "xl" }}
          >
            <Flex direction="column" px={2} pt={3}>
              <Heading fontWeight={600} fontSize={28}>
                New to ZCAMP?
              </Heading>
              <Text fontWeight={500} color="gray.500">
                Sign up now to enjoy a new experience and discovery
              </Text>
            </Flex>
            <Stack
              direction="row"
              spacing={5}
              px={2}
              pt={5}
              justify="space-between"
            >
              <Flex direction="row">
                <Button
                  colorScheme={"blue"}
                  size="md"
                  borderRadius="lg"
                  onClick={() => router.push("/login")}
                >
                  Login
                </Button>
                <Button
                  color="#2b6cb0"
                  borderColor={"2b6cb0"}
                  variant={"outline"}
                  size="md"
                  borderRadius="lg"
                  ml={5}
                  onClick={() => router.push("/register")}
                >
                  Register
                </Button>
              </Flex>
  
              <Flex align="center" justify="flex-end" px={2}></Flex>
            </Stack>
          </Box>
        </>
      );
    } else {
      create = (
        <>
          <Box
            borderWidth="1px"
            borderRadius="lg"
            bg="white"
            pb={4}
            w='full'
  
          >
            <Flex direction="row" px={2} pt={3}>
              <Avatar src={data?.me?.user?.profileImgUrl} size="md" ml={1} mr={5}>
                {" "}
                <AvatarBadge boxSize="1.25em" bg="green.500" />{" "}
              </Avatar>
              <Box
                bg="gray.200"
                w="full"
                borderRadius="md"
                cursor="text"
                _hover={{ borderColor: "#5B6ECB", borderWidth: "1px" }}
                onClick={onTextOpen}
              >
                <Text pt={3} pl={2} fontWeight={500} color="gray.500">
                  Share how you feel today
                </Text>
              </Box>
              <Flex direction="row" align='center' ml={2}>
                  <IconButton
                    icon={<IoImageOutline />}
                    borderRadius="full"
                    fontSize={{ base: 24, md: 26 }}
                    color="#5B6ECB"
                    aria-label="Image"
                    variant="ghost"
                    _groupHover={{ color: "#5B6ECB", bg: "#D6DDFF" }}
                    mr={1}
                  />
  
                  <IconButton
                    icon={<IoLinkOutline />}
                    color="#5B6ECB"
                    borderRadius="full"
                    fontSize={{ base: 24, md: 26 }}
                    _groupHover={{ color: "#5B6ECB", bg: "#D6DDFF" }}
                    aria-label="Image"
                    variant="ghost"
                  />
              </Flex>
            </Flex>          
              
          </Box>
  
          <Modal isOpen={isTextOpen} onClose={onTextClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Create a post</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <Flex align="center">
                  <Avatar
                    src={data?.me.user?.profileImgUrl}
                    size="md"
                    ml={1}
                    mr={2}
                  >
                    {" "}
                    <AvatarBadge boxSize="1.25em" bg="green.500" />{" "}
                  </Avatar>
                  <Text fontWeight={600} fontSize={20}>
                    {data?.me.user?.username}
                  </Text>
                </Flex>
                <Flex mt={2} direction='row'>
                  <Flex  w={40} mr={2}>
                  <Select placeholder="Everybody">
                    <option value="campers only">Campers only</option>
                    <option value="explorers only">Explorers only</option>
                    {/* {UserGroup?.getUserGroups.map((groups, i) => (
                      <option value="camps" key={i}>{groups.name}</option>
                    ))} */}
                  </Select>
                  </Flex>
                  <Flex  w={40}>
                  <Select placeholder="Select Group">
                    {UserGroup?.topGroups.map((groups) => (
                      <option value={groups.name} key={groups.id}>
                        <Flex  onClick={() => setGId(groups.id)}>
                        {groups.name}
                        </Flex>
                        </option>
                    ))}
                  </Select>
                  </Flex>
  
                  
                </Flex>
  
                <Formik
                  initialValues={{ title: "", body: "", groupId: gId  }}
                  onSubmit={async (values) => {
                    console.log(values);
                    const response = await createpost({
                      title: values.title,
                      body: values.body,
                      groupId: values.groupId
                    });
                    if( response?.data?.createPost?.post){
                      router.reload()
                    }
                  }}
                >
                  
                  {({ isSubmitting }) => (
                    
                    <Form>
                      <Box mb={3} mt={3}>
                        <InputField name="title" placeholder="Title" />
                      </Box>
                      <InputField
                        textarea
                        name="body"
                        placeholder="What do you want to share?"
                      />
                      {/* <Box mt={3} mb={3} w={40}>
                        <InputField name="postFlair" placeholder="Post Flair" />
                      </Box> */}
                      <Flex justify="end">
                        <Button
                          colorScheme="blue"
                          mr={3}
                          type="submit"
                          isLoading={isSubmitting}
                          onClick={onTextClose}
                        >
                          Post
                        </Button>
                        <Button onClick={onTextClose}>Cancel</Button>
                      </Flex>
                    </Form>
                  )}
                </Formik>
              </ModalBody>
            </ModalContent>
          </Modal>
        </>
      );
    }
    return create;
  };
  
  export default withUrqlClient(createUrqlClient, { ssr: true })(CreateGPost);
  
  export const GetUserGroup = () => {
    const [{ data }] = useTopGroupsQuery();
    return data;
  };
  