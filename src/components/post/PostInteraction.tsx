import { HStack, Box, Flex, Icon, Text, IconButton, useToast } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../../utils/createUrqlClient";
import { BsCaretDown, BsCaretUp } from "react-icons/bs";
import { IoChatbubbleOutline,IoShareSocialOutline, IoCaretDown, IoCaretUp, IoCaretUpOutline, IoCaretDownOutline, IoBookmarkOutline, } from "react-icons/io5";
import { useVotePostMutation, useMeQuery, useGetPostQuery, useGetPostVoteValueQuery, useUnvotePostMutation, Post } from "../../generated/graphql";


interface PostInteractionProps{
  postID: number;
  comments: number;
  post: Partial<Post>;
}

const PostInteraction: React.FC<PostInteractionProps> = ({ comments, postID, post }) => {
  const [{ data: voteData, fetching, error}, vote] = useVotePostMutation()
  const [, unvote] = useUnvotePostMutation()
  const [{data, }] = useGetPostQuery({
    variables:{
      getPostId: postID
    }

  })
  
  const [{data: voteValue}] =  useGetPostVoteValueQuery({
    variables: {
      getPostVoteValueId: postID
    }
  });
  const toast = useToast();
  const [{data: me}] = useMeQuery();
  
  const [points, setPoints] = useState(post?.voteCount!);

  const _value = voteValue?.getPostVoteValue!
  const [value, setValue] = useState(0)

  useEffect(() => {
    if(_value){
      setValue(_value)
    }
  })

  const upvote = async() => {
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
    if(voteValue?.getPostVoteValue !== 1){
     const voteresponse = await vote({
      votePostId: data?.getPost?.post?.id!,
      value: 1,
    })
    setValue(1)
    if(voteresponse?.data?.votePost?.success){
      setPoints(voteresponse?.data?.votePost?.voteCount!)
    }
    }
    if(value === 1){
    const undid = await unvote({
      unvotePostId: data?.getPost?.post?.id!
    })
    setValue(0)
    if(undid?.data?.unvotePost?.success){
      setPoints(undid?.data?.unvotePost?.voteCount!)
    }
  }
  return
}

const downvote = async() => {
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
   const downRes = await vote({
    votePostId: data?.getPost?.post?.id!,
    value: -1,
  })
  setValue(-1)
  if(downRes?.data?.votePost?.success){
    setPoints(downRes?.data?.votePost?.voteCount!)
  }
  }
  if(value===-1){
    const undid = await unvote({
      unvotePostId: data?.getPost?.post?.id!
    })
    setValue(0)
    if(undid?.data?.unvotePost?.success){
      setPoints(undid?.data?.unvotePost?.voteCount!)
    }
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
            icon={ value === 1 ? <IoCaretUp/> : <BsCaretUp />}
            aria-label="upvote"
            _hover={{ color: "#5E00AB", bg: "#DDB2FF" }}
            fontSize={{ base: 24, md: 26 }}
            variant="ghost"
            onClick={upvote}
            color={value === 1 ? '#5E00AB': '#000A16'}
          />

          <Text color="#000a16">{ points }</Text>

          <IconButton
            icon={ value === -1 ? <IoCaretDown/> : <BsCaretDown />}
            aria-label="downvote"
            fontSize={{ base: 24, md: 26 }}
            _hover={{ color: "#5E00AB", bg: "#DDB2FF" }}
            variant="ghost"
            onClick={downvote}
            mr={{ base: 2, md:10 }}
            color={value === -1 ? '#5E00AB': '#000a16'}

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