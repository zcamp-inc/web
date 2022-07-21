import { HStack, Box, Flex, Icon, Text, IconButton } from "@chakra-ui/react";


import { IoChatbubbleOutline,IoShareSocialOutline, IoCaretDown, IoCaretUp, IoBookmarkOutline } from "react-icons/io5";
import { useVotePostMutation, GetPostQuery, useGetPostQuery  } from "../generated/graphql";




export default function PostInteraction({ comments, postID } : {comments: number, postID: number }) {
  const [,vote] = useVotePostMutation()
  const [{data}] = useGetPostQuery({
    variables:{
      getPostId: postID
    }
  })
  return (

    // <HStack spacing={{ base: 40, md: 60 }}>
      <Flex direction='row' justify='space-between'>
      {/* <HStack spacing={{ base: 0, md: 20 }}> */}
      <Flex direction='row' justify='space-between'>
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
            onClick={(async () => {
              if (data?.getPost.post?.voteCount === 1){
                return;
              }
             
              await vote({
                votePostId: data?.getPost?.post?.id!,
                value: 1,
              })

            })}
          />

          <Text>{data?.getPost?.post?.voteCount}</Text>

          <IconButton
            icon={<IoCaretDown />}
            aria-label="downvote"
            fontSize={{ base: 24, md: 26 }}
            _hover={{ color: "#5E00AB", bg: "#DDB2FF" }}
            variant="ghost"
            onClick={(async () => {
              if (data?.getPost.post?.voteCount === -1){
                return;
              }
             
              await vote({
                votePostId: data?.getPost?.post?.id!,
                value: -1,
              })

            })}
            mr={{ base: 2, md:10 }}
          />
        </Flex>

        <Flex
          align="center"
          // p={2}
          // mx={4}
          borderRadius="lg"
          role="group"
          color="#000a16"
          _hover={{
            color: "#487D8D",
          }}
        >
          <IconButton
            icon={<IoChatbubbleOutline />}
            fontSize={{ base: 24, md: 26 }}
            _groupHover={{ color: "#487D8D", bg: "#D3F5FF" }}
            aria-label="comment"
            variant="ghost"
          />
          <Text ml="5px" mr={-20}>
            {comments}
          </Text>
        </Flex>
        </Flex>
      {/* </HStack> */}

      <Flex direction='row' justify='space-between'>
        <IconButton
          icon={<IoShareSocialOutline />}
          aria-label="share post"
          variant="ghost"
          // ml={{ base: -10, md: -20 }}
          mr={{ base: 7, md: 10 }}
          fontSize={{ base: 20, md: 26 }}
          color="#000a16"
          _hover={{ color: "#00A023", bg: "#9FFBB3" }}
        />

        <IconButton
          icon={<IoBookmarkOutline />}
          aria-label="save post"
          mr={5}
          variant="ghost"
          fontSize={{ base: 20, md: 26 }}
          color="#000a16"
          _hover={{ bg: "#FFC3D9", color: "#FF377F" }}
        />
      </Flex>
    {/* </HStack> */}
    </Flex>
  );
}
