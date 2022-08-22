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
  const [{data: user}] = useGetUsersQuery()
  const getName = user?.getUsers?.map((p) => (p.username));
  const getArr = ["johnmiiiicheal", "deez_noughts"]

  return (
    <>
      {postComments?.getPostComments?.comments?.map((c) => (
        <Flex direction="row" w='full' bg='white'>
          <Flex direction="column">
            <Avatar src={c.creator.user?.profileImgUrl} size="sm" />
          </Flex>
          <Flex direction="column">
            <Text fontSize={14} fontWeight={500}>
              {c.creator.user?.username}
            </Text>
            <Box>
                <Highlight query={user?.getUsers?.map((p) => (p.username))!} styles={{color: '#5E00AB'}} >
                    {c.body}
                </Highlight>
            </Box>
            
            <CommentInteraction commentID={c.id} postID={postID} />
          </Flex>
          
        </Flex>
      ))}
    </>
  );
};

