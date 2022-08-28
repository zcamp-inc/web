import { HStack, Box, Flex, Icon, Text, IconButton, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../utils/createUrqlClient";
import { BsCaretDown, BsCaretUp } from "react-icons/bs";
import { IoChatbubbleOutline,IoShareSocialOutline, IoCaretDown, IoCaretUp, IoCaretUpOutline, IoCaretDownOutline, IoBookmarkOutline, } from "react-icons/io5";
import { useVotePostMutation, useMeQuery, useGetPostQuery, useGetPostVoteValueQuery, RegPostFragment, useUnvotePostMutation } from "../generated/graphql";


interface PostInteractionProps{
  postID: number;
  comments: number;
}

const PostInteraction: React.FC<PostInteractionProps> = ({ comments, postID }) => {
  const [{ data: voteData, fetching, error}, vote] = useVotePostMutation()
  const [, unvote] = useUnvotePostMutation()
  const [{data, }] = useGetPostQuery({
    variables:{
      getPostId: postID
    }

  })
  
  const [{data: voteValue}] = useGetPostVoteValueQuery({
    variables: {
      getPostVoteValueId: postID
    }
  });
  let newVoteCount;


  const toast = useToast();
  const [{data: me}] = useMeQuery();
  let pointer = voteValue?.getPostVoteValue?.valueOf()!
  let point = data?.getPost?.post?.voteCount!
  const [points, setPoints] = useState(data?.getPost?.post?.voteCount!);
  const [value, setValue] = useState(voteValue?.getPostVoteValue!);

  const upvote = () => {
    if(!me?.me?.user){
      toast({
        title: 'Oopsies😭😭',
        description: "You can't do that yet, please login!!",
        status: 'error',
        duration: 6000,
        isClosable: true,
        variant:'left-accent'
      });
      return null;                
    }
    if( voteValue?.getPostVoteValue !== 1){
      vote({
      votePostId: data?.getPost?.post?.id!,
      value: 1,
    })
    pointer = 1
    alert(voteData?.votePost?.voteCount?.valueOf()!)
    setPoints(data?.getPost?.post?.voteCount! + 1)
    } else  {
    unvote({
      unvotePostId: data?.getPost?.post?.id!
    })
    pointer = 0
    setPoints(data?.getPost?.post?.voteCount! - 1)
  }
  return
}

const downvote = () => {
  if(!me?.me?.user){
    toast({
      title: 'Oopsies😭😭',
      description: "You can't do that yet, please login",
      status: 'error',
      duration: 6000,
      isClosable: true,
      variant:'left-accent'
    });
    return null;                
  }
  if( voteValue?.getPostVoteValue !== -1){
    vote({
    votePostId: data?.getPost?.post?.id!,
    value: -1,
  })
  pointer = -1
  setPoints(data?.getPost?.post?.voteCount! - 1)
  } else {
  unvote({
    unvotePostId: data?.getPost?.post?.id!
  })
  pointer = 0
  setPoints(data?.getPost?.post?.voteCount! + 1)
}
return 
}


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
          _hover={{ color: "#5E00AB" }}
        >
          <IconButton
            icon={ pointer === 1 ? <IoCaretUp/> : <BsCaretUp />}
            aria-label="upvote"
            _hover={{ color: "#5E00AB", bg: "#DDB2FF" }}
            fontSize={{ base: 24, md: 26 }}
            variant="ghost"
            onClick={upvote}
            color={pointer === 1 ? '#5E00AB': '#000A16'}
          />

          <Text color="#000a16">{point} = {pointer}</Text>

          <IconButton
            icon={ pointer === -1 ? <IoCaretDown/> : <BsCaretDown />}
            aria-label="downvote"
            fontSize={{ base: 24, md: 26 }}
            _hover={{ color: "#5E00AB", bg: "#DDB2FF" }}
            variant="ghost"
            onClick={downvote}
            mr={{ base: 2, md:10 }}
            color={pointer === -1 ? '#5E00AB': '#000a16'}

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

export default withUrqlClient(createUrqlClient, { ssr: true })(PostInteraction);