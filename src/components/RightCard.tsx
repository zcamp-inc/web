import {
  Box,
  Flex,
  Heading,
  Text,
  HStack,
  Badge,
  Button,
  VStack,
  Stack,
  Link,
  useDisclosure,
  Avatar,
  AvatarBadge,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Select,
} from "@chakra-ui/react";
import { Formik, Form } from "formik";
import NextLink from "next/link";
import router from "next/router";
import { Key } from "react";
import { InputField } from "./InputField";
import { TopGroups } from "./TopGroups";

export default function RightCard() {
  const {
    isOpen: isTextOpen,
    onOpen: onTextOpen,
    onClose: onTextClose,
  } = useDisclosure();
  return (
    <Stack spacing={4} direction="column">
            <TopGroups />

      <Box borderRadius="10px" px={1} pt={1} mb={3}>
        <Box bg="#000a16" borderRadius="10px" pb={3} w={80}>
          <Flex borderRadius="10px 10px 0 0">
            <img src="/rewavy.png" width="100%" />
          </Flex>
          <Flex ml={5} mt={2}>
            <Text color="white" fontWeight={400} fontSize={14} w={56}>
              Discover new camps, join and interact with campers.
              <br /> Define your homefeed with your favorite camps
            </Text>
          </Flex>
          <VStack mt={2}>
            <Button
              w={40}
              color="#000a16"
              bg="#57FFF5"
              _hover={{ bg: "#57FFF5", color: "#000a16" }}
            >
              Create Post
            </Button>
            <Button
              w={40}
              variant="outline"
              color="#57FFF5"
              borderColor="#57FFF5"
              _hover={{ bg: "#57FFF5", color: "#000a16" }}
              onClick={onTextOpen}
            >
              Create Subcamp
            </Button>
          </VStack>
        </Box>
      </Box>

      <Flex borderRadius="10px" px={1} >
        <Box bg="white" borderRadius="10px" pb={3} w={80}>
          <Flex borderRadius="10px 10px 0 0">
            <img src="/WAVYHOME.png" width="100%" />
          </Flex>
          <Flex ml={5} mt={2}>
            <Text color="#000a16" fontWeight={400} fontSize={14} w={56}>
              ZCAMP Guildlines and Privacy Policies
            </Text>
          </Flex>
          <NextLink href="/" passHref>
            <Link textDecoration="none">
              {" "}
              <Text color="#000a16" align="center">
                Privacy Policy
              </Text>
            </Link>
          </NextLink>
        </Box>
      </Flex>

      <Modal isOpen={isTextOpen} onClose={onTextClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create a SubCamp</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              {/* <Flex align="center">
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

                
              </Flex> */}

              <Formik
                initialValues={{ title: "", desc: ""  }}
                onSubmit={async (values) => {
                  console.log(values);
                 
                }}
              >
                
                {({ isSubmitting }) => (
                  
                  <Form>
                    <Box mb={3} mt={3}>
                      <InputField name="title" placeholder="Title" />
                    </Box>
                    <InputField
                      textarea
                      name="desc"
                      placeholder="Group Description"
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
                        onClick={() => router.push('/')}
                      >
                        Create
                      </Button>
                      <Button onClick={onTextClose}>Cancel</Button>
                    </Flex>
                  </Form>
                )}
              </Formik>
            </ModalBody>
          </ModalContent>
        </Modal>
    </Stack>
  );
}
