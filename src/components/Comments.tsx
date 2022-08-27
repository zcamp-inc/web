import {
  Flex,
  Avatar,
  Text,
  Highlight,
  Box,
  IconButton,
  useDisclosure,
  ScaleFade,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
  IoChatbubbleOutline,
  IoShareSocialOutline,
  IoCaretDown,
  IoCaretUp,
  IoBookmarkOutline,
} from "react-icons/io5";
import {
  useGetPostCommentsQuery,
  useGetUsersQuery,
  useMeQuery,
  useCreateCommentMutation,
  useGetCommentQuery,
} from "../generated/graphql";
import { InputField } from "./InputField";
import { useRouter } from "next/router"
import { Formik, Form } from "formik";
import { CommentInteraction } from "./CommentInteraction";

export const Comments = ({ postID }: { postID: number }) => {
  const [{ data: postComments }] = useGetPostCommentsQuery({
    variables: {
      postId: postID,
    },
  });
  const commentID = postComments?.getPostComments?.comments?.map((p) => (p.id))! as any
  const [{ data: comment }] = useGetCommentQuery({
    variables: {
      getCommentId: commentID
    }
  })
  const [{data: user}] = useGetUsersQuery()
  const getName = user?.getUsers?.map((p) => (p.username));
  const getArr = ["johnmiiiicheal", "deez_noughts"]

  return (
    <>
      {postComments?.getPostComments?.comments?.map((c) => (
        <>        
        <Flex direction="row" w='full' bg='white' px={4}>
          <Flex direction="column">
            <Avatar src={c.creator.user?.profileImgUrl} size="sm" />
          </Flex>
          <Flex direction="column" px={4}>
            <Text fontSize={14} fontWeight={600}>
              {c.creator.user?.username}
            </Text>
            <Box w={{ base:'full', md: '400px', lg: '550px'}}>
                <Highlight query={user?.getUsers?.map((p) => (p.username))!} styles={{color: '#5E00AB'}} >
                    {c.body}
                </Highlight>
            </Box>
            
            <CommentInteraction commentID={c.id} postID={postID} />
          </Flex>          
        </Flex>
        
        </>
      ))}
    </>
  );
};

