import {
  Flex,
  Avatar,
  Text,
  useToast,
  IconButton,
  useDisclosure,
  Collapse,
  Button,
  Box,
  ButtonGroup,
} from "@chakra-ui/react";
import React from "react";
import {
  IoChatbubbleOutline,
  IoShareSocialOutline,
  IoCaretDown,
  IoCaretUp,
  IoBookmarkOutline,
} from "react-icons/io5";
import {
  useGetPostQuery,
  useVoteCommentMutation,
  useMeQuery,
  useCreateCommentMutation,
  useDeleteCommentMutation,
  useUpdateCommentMutation,
  useGetCommentQuery,
} from "../generated/graphql";
import { InputField } from "./InputField";
import { useRouter } from "next/router";
import { Formik, Form } from "formik";

export const CommentInteraction = ({
  commentID,
  postID,
}: {
  commentID: number;
  postID: number;
}) => {
    const [{ data: me }] = useMeQuery();
    const [, vote] = useVoteCommentMutation();
    const [, createcomment] = useCreateCommentMutation();
    const [, deleteComment] = useDeleteCommentMutation();
    const [, updatecomment] = useUpdateCommentMutation();
     const [{ data }] = useGetCommentQuery({
        variables: {
        getCommentId: commentID,
        },
    });
    const [{ data: post }] = useGetPostQuery({
        variables: {
        getPostId: postID,
        },
    });
  const toast = useToast();
  const router = useRouter();
  const { isOpen, onToggle } = useDisclosure();
  const { isOpen: isCommentOpen, onToggle: onCommentToggle} = useDisclosure();


  return (
    <Box>
    <Flex
      direction="row"
      align="center"
      mb={5}  
    >
      <Flex
        align="center"
        ml={{ base: 2, md: 5 }}
        borderRadius="lg"
        role="group"
        color="#000a16"
        _hover={{ color: "#5E00AB" }}
      >
        <IconButton
          icon={<IoCaretUp />}
          aria-label="upvote"
          _hover={{ color: "#5E00AB", bg: "#DDB2FF" }}
          fontSize={{ base: 24, md: 26 }}
          variant="ghost"
          onClick={async () => {
            if (!me?.me?.user) {
              toast({
                title: "Oopsies😭😭",
                description: "You can't do that yet, please login",
                status: "error",
                duration: 6000,
                isClosable: true,
                variant: "left-accent",
              });
              return null;
            } else {
              await vote({
                voteCommentId: data?.getComment?.comment?.id!,
                value: 1,
              });
            }
            return vote;
          }}
        />

        <Text>{data?.getComment?.comment?.voteCount}</Text>

        <IconButton
          icon={<IoCaretDown />}
          aria-label="downvote"
          fontSize={{ base: 24, md: 26 }}
          _hover={{ color: "#5E00AB", bg: "#DDB2FF" }}
          variant="ghost"
          onClick={async () => {
            await vote({
              voteCommentId: data?.getComment?.comment?.id!,
              value: -1,
            });
          }}
          mr={{ base: 2, md: 10 }}
        />
      </Flex>

        <Flex
          align="center"
          pr={2}
          cursor='pointer'
          borderRadius="lg"
          role="group"
          color="#000a16"
          _hover={{
            color: "#487D8D",
            bg: "#D3F5FF"
          }}
          onClick={onToggle}
        >
          <IconButton
            icon={<IoChatbubbleOutline />}
            fontSize={{ base: 16, md: 20 }}
            bg='none'
            _hover={{ color: "none", bg: 'none'}}
            aria-label="reply"
            variant="ghost"
          />
          <Text ml={1} fontSize={15}>
            Reply
          </Text>
        </Flex>  
        <Button
            px={2}
            ml={2}
            minW="80px"
            cursor='pointer'
            borderRadius='lg'
            color="#000A16"
            _hover={{
                color: "#487D8D",
                bg: "#D3F5FF",
            }}
            variant='ghost'
            fontWeight={500}
            fontSize={15}
            >
            Save
        </Button> 

        <Button
            px={2}
            ml={2}
            minW="80px"
            cursor='pointer'
            borderRadius='lg'
            color="#000A16"
            _hover={{
                color: "#487D8D",
                bg: "#D3F5FF",
            }}
            variant='ghost'
            display={ data?.getComment?.comment?.creator?.user?.id === me?.me?.user?.id ? 'block' : 'none'}
            fontWeight={500}
            fontSize={15}
            onClick={onCommentToggle}
            >
            Edit
        </Button>  
       
        <Button
            px={2}
            ml={2}
            minW="80px"
            cursor='pointer'
            borderRadius='lg'
            color="red.300"
            _hover={{
                color: "#487D8D",
                bg: "#D3F5FF",
            }}
            variant='ghost'
            display={ data?.getComment?.comment?.creator?.user?.id === me?.me?.user?.id ? 'block' : 'none'}
            fontWeight={500}
            fontSize={15}
            onClick={() => {
                deleteComment({deleteCommentId: data?.getComment?.comment?.id! })
            }}
            >
            Delete
        </Button>   

        
    </Flex>
    <Collapse in={isOpen}>
          <Formik
            initialValues={{
              body: "",
              postId: postID,
              parentCommentId: data?.getComment?.comment?.id!,
            }}
            onSubmit={async (values) => {
              console.log(values);
              const response = await createcomment({
                body: values.body,
                postId: postID,
                parentCommentId: data?.getComment?.comment?.id!,
              });
              if (response?.data?.createComment?.errors) {
                toast({
                  title: "Comments Error😓😓",
                  description: "We've could not post your comment.",
                  status: "success",
                  duration: 5000,
                  isClosable: true,
                });
              }
              toast({
                title: "Comment Posted.🤗🤗",
                description: "We've sent your comment.",
                status: "success",
                duration: 5000,
                isClosable: true,
              });
              router.reload();
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <Box ml={{base: 0, lg: 7}} mt={1} w={{ base: 'full', lg: '400px'}} >
                <InputField
                  textarea
                  name="body"
                  placeholder="What are your thoughts?"
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
                  >
                    Post
                  </Button>
                </Flex>
                </Box>
              </Form>
            )}
          </Formik>
        </Collapse>


        <Collapse in={isCommentOpen}>
          <Formik
            initialValues={{
              body: data?.getComment?.comment?.body!,
              updateCommentId: data?.getComment?.comment?.id!,
            }}
            onSubmit={async (values) => {
              console.log(values);
              const response = await updatecomment({
                body:values.body,
                updateCommentId: data?.getComment?.comment?.id!,
              });
              if (response?.data?.updateComment?.errors) {
                toast({
                  title: "Comments Error😓😓",
                  description: "We've could not update your comment.",
                  status: "success",
                  duration: 5000,
                  isClosable: true,
                });
              }
              toast({
                title: "Comment Updated.🤝🤝",
                description: "We've updated your comment.",
                status: "success",
                duration: 5000,
                isClosable: true,
              });
              router.reload();
            }}
          >
            {({ isSubmitting: isCommentSubmitting }) => (
              <Form>
                <Box ml={{base: 0, lg: 7}} mt={1} w={{ base: 'full', lg: '400px'}} >
                <InputField
                  textarea
                  name="body"
                />
                {/* <Box mt={3} mb={3} w={40}>
                      <InputField name="postFlair" placeholder="Post Flair" />
                    </Box> */}
                <Flex justify="end">

                  <Button
                    colorScheme="blue"
                    mr={3}
                    type="submit"
                    isLoading={isCommentSubmitting}
                  >
                    Update
                  </Button>
                  <Button
                    borderColor='red.300'
                    color='red.300'
                    _hover={{ bg: 'red.300', color: 'white'}}
                    variant='outline'
                    mr={3}
                    onClick={onCommentToggle}
                  >
                    Cancel
                  </Button>
                </Flex>
                </Box>
              </Form>
            )}
          </Formik>
        </Collapse>

    </Box>

    
  );
};
