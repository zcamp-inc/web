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
  FormControl,
  Heading,
  Textarea,
  Select,
} from "@chakra-ui/react";
import { route } from "next/dist/server/router";
import { useRouter } from "next/router";
import React from "react";
import { IoImage, IoMic, IoPlay, IoList } from "react-icons/io5";
import { useMeQuery } from "../../generated/graphql";
interface CreatePostProps {}

export const CreatePost: React.FC<CreatePostProps> = () => {
  const {
    isOpen: isTextOpen,
    onOpen: onTextOpen,
    onClose: onTextClose,
  } = useDisclosure();

  const router = useRouter();
  const [{ data, fetching }] = useMeQuery();
  const [value, setValue] = React.useState('')
  const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => setValue(event.target.value)
  
  let create = null;
  if (fetching) {
    create;
  } else if (!data?.me?.user) {
    create = (
      <>
        <Box
          borderWidth="1px"
          borderRadius="lg"
          bgImage={'/newuser.png'}
          pb={8}
          w={{ base: "full", md: "xl" }}
          
        >
          <Flex direction="column" px={2} pt={3}>
            <Heading fontWeight={600} fontSize={28}>New to ZCAMP?</Heading>
            <Text fontWeight={500} color='gray.500'>Sign up now to enjoy a new experience and discovery</Text>
          </Flex>
          <Stack
            direction="row"
            spacing={5}
            px={2}
            pt={5}
            justify="space-between"
          >
            <Flex direction="row">

              <Button colorScheme={"blue"} size="md" borderRadius="lg" onClick={() => router.push('/login')}>
                Login
              </Button>
            <Button color='#2b6cb0' borderColor={'2b6cb0'} variant={'outline'} size="md" borderRadius="lg" ml={5} onClick={() => router.push('/register')}>
                Register
              </Button>
            </Flex>

            <Flex align="center" justify="flex-end" px={2}>
              
            </Flex>
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
          pb={8}
          w={{ base: "full", md: "xl" }}
        >
          <Flex direction="row" px={2} pt={3}>
            <Avatar src={data?.me?.user?.profileImgUrl} size="md" ml={1} mr={5}>
              {" "}
              <AvatarBadge boxSize="1.25em" bg="green.500" />{" "}
            </Avatar>
            {/* <Input
            name="Post Text"
            placeholder="How do you feel today?"
            _placeholder={{ color: "gray.500" }}
            bg="gray.200"
            onClick={onTextOpen}
          /> */}
            <Box
              bg="gray.200"
              w="full"
              borderRadius="lg"
              cursor="pointer"
              onClick={onTextOpen}
            >
              <Text pt={3} pl={2} fontWeight={500} color="gray.500">
                Share how you feel today
              </Text>
            </Box>
          </Flex>
          <Stack
            direction="row"
            spacing={5}
            pl={{ base: 20, md: 20 }}
            pt={5}
            justify="space-between"
          >
            <Flex direction="row">
              <Flex align="center" cursor="pointer" role="group">
                <IconButton
                  icon={<IoImage />}
                  borderRadius="full"
                  fontSize={{ base: 24, md: 26 }}
                  color="#7E9B2D"
                  aria-label="Image"
                  variant="ghost"
                  _groupHover={{ color: "7E9B2D", bg: "#E9FFA9" }}
                  mr={1}
                />
                <Text display={{ base: "none", md: "flex" }} mr={5}>
                  {" "}
                  Image{" "}
                </Text>
              </Flex>

              <Flex align="center" cursor="pointer" role="group">
                <IconButton
                  icon={<IoPlay />}
                  color="#5B6ECB"
                  borderRadius="full"
                  fontSize={{ base: 24, md: 26 }}
                  _groupHover={{ color: "#5B6ECB", bg: "#D6DDFF" }}
                  aria-label="Image"
                  variant="ghost"
                />
                <Text display={{ base: "none", md: "flex" }} mr={5}>
                  {" "}
                  Video{" "}
                </Text>
              </Flex>
            </Flex>
          </Stack>
        </Box>

        <Modal isOpen={isTextOpen} onClose={onTextClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create a post</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <Flex align='center'>
                <Avatar src={data?.me.user?.profileImgUrl} size="md" ml={1} mr={2}>
                  {" "}
                  <AvatarBadge boxSize="1.25em" bg="green.500" />{" "}
                </Avatar>
                <Text fontWeight={600} fontSize={20}>{data?.me.user?.username}</Text>
              </Flex>
              <Box mt={2} w={40}>
                <Select placeholder="Everybody">
                  <option value="campers only">Campers only</option>
                  <option value="explorers only">Explorers only</option>
                </Select>
              </Box>
              <Input placeholder="Title" mt={5} mb={2} value={value} onChange={handleChange}/>
              <Textarea
                placeholder="What do you want to share?"
                
                mb={5}
              />
              <Input placeholder="Post Flair" mb={5} w={28} />
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} isDisabled={value === '' ? true : false}>
                Post
              </Button>
              <Button onClick={onTextClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }
  return create;
};
