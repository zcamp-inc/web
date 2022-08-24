import {
  useTopGroupsQuery,
  useJoinGroupMutation,
  useMeQuery,
} from "../generated/graphql";
import {
  Box,
  Flex,
  Text,
  Divider,
  Button,
  Image,
  Avatar,
  useToast,
  Skeleton,
  SkeletonCircle,
} from "@chakra-ui/react";
import NextLink from "next/link";
import React, { useState } from "react";
import { useGetUserGroupsQuery } from "../generated/graphql";
import { UserGroups } from "./user/UserGroups";
import { useRouter } from "next/router"

interface TopGroupProps {
}

export const TopGroups: React.FC<TopGroupProps> = () => {
  const [{data: me}] = useMeQuery()
  const [{ data, fetching }] = useTopGroupsQuery();
  const [, join] = useJoinGroupMutation();
  const userGroup = UserGroup()
  const groupe = userGroup?.getUserGroups?.map((usergroupe) => (usergroupe.id))
  const tope = data?.topGroups?.map((topgroupe) => (topgroupe.id))

  const diff_tope = tope?.filter(x => !groupe?.includes(x));
  const router = useRouter();
  const toast = useToast()
  return (
    <>
    <Box display={!me?.me?.user ? 'none' : 'block'}>
       <UserGroups />
    </Box>
    <Box borderRadius="10px" px={1} pt={1} mb={3} >
      <Box bg="white" borderRadius="10px" pb={3} w={80}>
        <Box
          h={24}
          overflow="hidden"
          objectFit="cover"
          borderRadius="10px 10px 0 0"
          bg="gray.800"

        >
          <Image
            src={data?.topGroups[0] ? data?.topGroups[0]?.bannerImgUrl : "/fakeimages/fakecolors.jpg"}
            key={data?.topGroups[0]?.id}
            alt="logo_img"
            borderRadius="10px 10px 0 0"
            mt={data?.topGroups[0] ? -20 : 0}
            opacity={0.4}
          />
        </Box>
        <Text
          color="white"
          bg="black"
          mt={-6}
          mb={-1}
          px={5}
          fontWeight={600}
          borderRadius="10px 10px 0 0"
        >
          {" "}
          Top Communities{" "}
        </Text>

        <Flex align="center" justify="space-between" mt={2} px={5} pb={2}>
          <Flex justify="center" direction="column">
            { !data && fetching ? (
              <>
              <Flex w={60} mt={2} mb={2} justify="space-between">
                <Flex w={60} align="center">
                  <SkeletonCircle h={8} w={10} mr={3} />
                  <Skeleton h="20px" w="full" />
                </Flex>
              </Flex>
              <Divider ml={-5} w={80} />

              <Flex w={60} mt={2} mb={2} justify="space-between">
                <Flex w={60} align="center">
                  <SkeletonCircle h={8} w={10} mr={3} />
                  <Skeleton h="20px" w="full" />
                </Flex>
              </Flex>

              <Divider ml={-5} w={80} />

              <Flex w={60} mt={2} mb={2} justify="space-between">
                <Flex w={60} align="center">
                  <SkeletonCircle h={8} w={10} mr={3} />
                  <Skeleton h="20px" w="full" />
                </Flex>
              </Flex>
            </>
            ) : (
            
            data?.topGroups.map((groupInfo) => (
              <Box key={ `groups id: ${groupInfo?.id}`}>
                    <Flex w={60} mt={2} mb={2} justify='space-between'>
                    <NextLink href={{ pathname: '/z/[university]/[name]', query: { university:"CovenantUniversity", name: groupInfo.name }}} passHref>
                <Flex w={60} cursor='pointer' mr={2}> 
                <Avatar src={groupInfo.logoImgUrl} size="sm"  mr={2} zIndex={0} />
                <Text w={40}> {groupInfo.name}</Text>
                </Flex>
                  </NextLink>
                <Flex justify="flex-end">
                  <Button
                    colorScheme="blue"
                    borderRadius="md"
                    px={5}
                    h={8}
                    fontWeight={500}
                    variant={diff_tope?.includes(groupInfo.id) ? 'solid' : 'outline'}
                    isDisabled=  { diff_tope?.includes(groupInfo.id) ? false : true } 
                    onClick ={ async function(){
                      const response = await join({groupId: groupInfo.id});                  
                      if (response?.error){
                        toast({
                          title: 'Oopsies😭😭',
                          description: "We could not add you to the subcamp",
                          status: 'error',
                          duration: 6000,
                          isClosable: true,
                          variant:'left-accent'
                        });
                        return null;                      
                      }else{                      
                      toast({
                        title: "Cool🤩🤩",
                        description: `We have added you to ${groupInfo.name}`,
                        status: 'success',
                        duration: 6000,
                        isClosable: true,
                        variant:'subtle',
                      });

                      router.reload()
                    }
                    return response
                    }}                    
                  > 
                    { diff_tope?.includes(groupInfo.id) ? 'Join' : 'Joined' } 
                  </Button>
                </Flex>
              </Flex>
              
              <Divider ml={-5} w={80} />
              </Box>

            )))}
          </Flex>
          
        </Flex>

        <Flex justify="center" align='center' mt={2}>
        
          <Button
            colorScheme="blue"
            borderRadius="md"
            size="lg"
            h={10}
            fontWeight={500}
          >
            View All
          </Button>
        </Flex>
      </Box>
    </Box>
    </>
  );
};

const UserGroup = () => {
  const [{data}] = useGetUserGroupsQuery();
  return data;
}
