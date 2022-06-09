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
  FormLabel,
  Textarea,
} from "@chakra-ui/react";
import JoditEditor from "jodit-react";
import { useRouter } from "next/router";
import React from "react";
import { IoImage, IoMic, IoPlay, IoList } from "react-icons/io5";



interface CreatePostProps {}

export const CreatePost: React.FC<CreatePostProps> = () => {
  const {
    isOpen: isTextOpen,
    onOpen: onTextOpen,
    onClose: onTextClose,
  } = useDisclosure();

  const initialRef = React.useRef();
  const finalRef = React.useRef();
  const router = useRouter()

  return (
    <>
      <Box
        borderWidth="1px"
        borderRadius="lg"
        bg="white"
        pb={8}
        w={{ base: "full", md: "xl" }}
        
      >
        <Flex direction="row" px={2} pt={3} >
          <Avatar size="md" ml={1} mr={5}>
            {" "}
            <AvatarBadge boxSize="1.25em" bg="green.500" />{" "}
          </Avatar>
          <Input
            name="Post Text"
            placeholder="How do you feel today?"
            _placeholder={{ color: "gray.500" }}
            bg="gray.200"
            onClick={onTextOpen}
          />
        </Flex>

        <Stack direction="row" spacing={5} pl={{base: 20, md: 3}} pt={5}>
          <Flex
            align="center"
            borderRadius="full"
            role="group"
            cursor="pointer"
            color="#7E9B2D"
            ml={{ base: 0, md: 16 }}
            // bg="#000a16"
            border="1px"
            _hover={{ color: "white", bg: "#7E9B2D" }}
          >
            <IconButton
              icon={<IoImage />}
              borderRadius="full"
              fontSize={{ base: 24, md: 26 }}
              //   _groupHover={{ color: "#5E00AB", bg: "#DDB2FF" }}
              _hover={{ color: "none", bg: "none" }}
              aria-label="Image"
              variant="ghost"
            />
            <Text
              display={{
                base: "none",
                md: "flex",
              }}
              pr={3}
            >
              Image
            </Text>
          </Flex>

          <Flex
            align="center"
            borderRadius="full"
            role="group"
            cursor="pointer"
            color="#5B6ECB"
            ml={{ base: 0, md: 16 }}
            // bg="#000a16"
            border="1px"
            _hover={{ color: "white", bg: "#5B6ECB" }}
          >
            <IconButton
              icon={<IoPlay />}
              borderRadius="full"
              fontSize={{ base: 24, md: 26 }}
              //   _groupHover={{ color: "#5E00AB", bg: "#DDB2FF" }}
              _hover={{ color: "none", bg: "none" }}
              aria-label="Image"
              variant="ghost"
            />
            <Text
              display={{
                base: "none",
                md: "flex",
              }}
              pr={3}
            >
              Video
            </Text>
          </Flex>

          <Flex
            align="center"
            borderRadius="full"
            role="group"
            cursor="pointer"
            color="#FF3780"
            ml={{ base: 0, md: 16 }}
            // bg="#000a16"
            border="1px"
            _hover={{ color: "white", bg: "#FF3780" }}
          >
            <IconButton
              icon={<IoMic />}
              borderRadius="full"
              fontSize={{ base: 24, md: 26 }}
              //   _groupHover={{ color: "#5E00AB", bg: "#DDB2FF" }}
              _hover={{ color: "none", bg: "none" }}
              aria-label="Image"
              variant="ghost"
            />
            <Text
              display={{
                base: "none",
                md: "flex",
              }}
              pr={3}
            >
              Audio
            </Text>
          </Flex>

          <Flex
            align="center"
            borderRadius="full"
            role="group"
            cursor="pointer"
            color="#FFD700"
            ml={{ base: 0, md: 16 }}
            // bg="#000a16"
            border="1px"
            _hover={{ color: "white", bg: "#FFD700" }}
          >
            <IconButton
              icon={<IoList />}
              borderRadius="full"
              fontSize={{ base: 24, md: 26 }}
              //   _groupHover={{ color: "#5E00AB", bg: "#DDB2FF" }}
              _hover={{ color: "none", bg: "none" }}
              aria-label="Image"
              variant="ghost"
            />
            <Text
              display={{
                base: "none",
                md: "flex",
              }}
              pr={3}
            >
              Poll
            </Text>
          </Flex>
        </Stack>
      </Box>

      <Modal isOpen={isTextOpen} onClose={onTextClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Post</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input placeholder="Title" />
            </FormControl>
            
            
           <Textarea placeholder='Text (optional)' mt={5} mb={5}/> 
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Post
            </Button>
            <Button onClick={onTextClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
