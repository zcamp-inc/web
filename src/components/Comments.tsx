import {
  Flex,
  Avatar,
  Text,
  Highlight,
  IconButton,
  useDisclosure,
  ScaleFade,
  Button,
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
  return (
    <>
      {postComments?.getPostComments?.comments?.map((c) => (
        <Flex direction="row" bg='white'>
          <Flex direction="column">
            <Avatar src={c.creator.user?.profileImgUrl} size="sm" />
          </Flex>
          <Flex direction="column">
            <Text fontSize={14} fontWeight={500}>
              {c.creator.user?.username}
            </Text>
            <Highlight query={[`@${getName}`]} styles={{ px: '2', py:'1', bg: 'red.100'}} >
                {c.body}
            </Highlight>
            
            <CommentInteraction commentID={c.id} postID={postID} />
          </Flex>
          
        </Flex>
      ))}
    </>
  );
};

