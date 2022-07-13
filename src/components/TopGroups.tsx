import {
  useTopGroupsQuery,
  useJoinGroupMutation,
} from "../generated/graphql";
import {
  Box,
  Flex,
  Text,
  Divider,
  Button,
  Image,
  Avatar,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useGetUserGroupsQuery } from "../generated/graphql";

interface TopGroupProps {
}

export const TopGroups: React.FC<TopGroupProps> = () => {
  const [{ data }] = useTopGroupsQuery();
  const [, join] = useJoinGroupMutation();
  const userGroup = UserGroup()
  const range=[ 0, 1, 2, 3];

  const [buttonText, setButtonText] = useState("Join")
  return (
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
            opacity={0.2}
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
            {data?.topGroups.map((groupInfo, i ) => (
              <>
              <Flex w={60} key={i} mt={2} mb={2} justify='space-between'>
                <Flex w={60}> 
                <Avatar src={groupInfo.logoImgUrl} size="sm"  mr={2}/>
                <Text w={40}> {groupInfo.name}</Text>
                </Flex>
                <Flex justify="flex-end" key={i}>
                  <Button
                    colorScheme="blue"
                    borderRadius="md"
                    px={5}
                    h={8}
                    fontWeight={500}
                    
                    // onClick={() => join(groupInfo.id  as unknown as Exact<{ groupId: number; }>)}
                    onClick ={ async function(){
                      if(userGroup?.getUserGroups[groupInfo.id].id === groupInfo.id ){
                        return setButtonText("Joined")
                      }
                      const response = await join({groupId: groupInfo.id});
                      if (response?.error){
                        console.log('error here')
                        return null;                      
                      }
                    }}
                    
                  >
                    {buttonText}
                  </Button>
                </Flex>
              </Flex>
              
              <Divider ml={-5} w={80} />

              </>
            ))}
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
  );
};

const UserGroup = () => {
  const [{data}] = useGetUserGroupsQuery();
  return data;
}


