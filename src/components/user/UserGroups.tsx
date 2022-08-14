import {
  useTopGroupsQuery,
  useJoinGroupMutation,
  useGetUserGroupsQuery,
} from "../../generated/graphql";
import {
  Box,
  Flex,
  Text,
  Divider,
  Button,
  Image,
  Avatar,
  SkeletonCircle,
  SkeletonText,
  Skeleton,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";

interface UserGroupsProps {}

export const UserGroups: React.FC<UserGroupsProps> = () => {
  const [{ data, fetching }] = useGetUserGroupsQuery();
  const [, join] = useJoinGroupMutation();
  const router = useRouter();
  const range = [0, 1, 2, 3];

  return (
    <Box borderRadius="10px" px={1} pt={1} mb={3}>
      <Box bg="white" borderRadius="10px" pb={3} w={80}>
        <Box
          h={24}
          overflow="hidden"
          objectFit="cover"
          borderRadius="10px 10px 0 0"
          bg="gray.800"
        >
          <Image
            src={
              data?.getUserGroups[0]
                ? data?.getUserGroups[0]?.bannerImgUrl
                : "/fakeimages/fakeland.jpg"
            }
            key={data?.getUserGroups[0]?.id}
            alt="logo_img"
            borderRadius="10px 10px 0 0"
            mt={data?.getUserGroups[0] ? -20 : 0}
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
          My Communities{" "}
        </Text>

        <Flex align="center" justify="space-between" mt={2} px={5} pb={2}>
          <Flex justify="center" direction="column">
            {!data && fetching ? (
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
              data?.getUserGroups.map((groupInfo, i) => (
                <>
                  <Flex w={60} key={i} mt={2} mb={2} justify="space-between">
                    <Flex w={60}>
                      <Avatar src={groupInfo.logoImgUrl} size="sm" mr={2} />
                      <Text w={40}> {groupInfo.name}</Text>
                    </Flex>
                    <Flex justify="flex-end" key={i}>
                      <NextLink
                        href={{
                          pathname: "/z/[university]/[name]",
                          query: { university: "CovenantUniversity", name: groupInfo.name },
                        }}
                        passHref
                      >
                        <Button
                          colorScheme="blue"
                          borderRadius="md"
                          px={5}
                          h={8}
                          fontWeight={500}
                        >
                          View
                        </Button>
                      </NextLink>
                    </Flex>
                  </Flex>

                  <Divider ml={-5} w={80} />
                </>
              ))
            )}
          </Flex>
        </Flex>

        <Flex justify="center" align="center" mt={2}>
          <Button
            colorScheme="blue"
            borderRadius="md"
            size="lg"
            h={10}
            fontWeight={500}
            onClick={() => {
              router.push("/explore");
            }}
          >
            Explore
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};
