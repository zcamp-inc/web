import { useTopGroupsQuery, MeQuery } from "../generated/graphql";
import {
  Box,
  Flex,
  Text,
  Divider,
  Button,
  Image,
  Avatar,
  Skeleton,
  SkeletonCircle,
} from "@chakra-ui/react";
import React from "react";

interface TopGroupProps {
}

export const TopGroups: React.FC<TopGroupProps> = () => {
  const [{ data }] = useTopGroupsQuery();

  return (
    <Box borderRadius="10px" px={1} pt={1} mb={3}>
      <Box bg="white" borderRadius="10px" pb={3} w={80}>
        <Box h={24} overflow="hidden" objectFit="cover" borderRadius='10px 10px 0 0' bg='gray.800'>
          <Image
            src={data?.topGroups[0].bannerImgUrl}
            alt="logo_img"
            borderRadius='10px 10px 0 0'
            mt={-20}
            opacity={0.2}

          />
        </Box>
        <Text color="white" bg='black' mt={-6} mb={6} px={5} fontWeight={600} borderRadius='10px 10px 0 0'>
          {" "}
          Top Communities{" "}
        </Text>

        <Flex align="center" justify="space-between" mt={2} px={5} pb={2}>
          <Flex align="center">
            <Avatar src={data?.topGroups[0].logoImgUrl} size="sm" />
            <Text fontWeight={500} fontSize={16} ml={2}>
              {data?.topGroups[0].name}
            </Text>
          </Flex>
          <Flex justify="flex-end">
            <Button
              colorScheme="blue"
              borderRadius="md"
              px={5}
              h={8}
              fontWeight={500}
            >
              Join
            </Button>
          </Flex>
        </Flex>
        <Divider />

        <Flex align="center" justify="space-between" mt={2} px={5} pb={2}>
          <Flex align="center">
            <Avatar src={data?.topGroups[1].logoImgUrl} size="sm" />
            <Text fontWeight={500} fontSize={16} ml={2}>
              {data?.topGroups[1].name}
            </Text>
          </Flex>
          <Flex justify="flex-end">
            <Button
              colorScheme="blue"
              borderRadius="md"
              px={5}
              h={8}
              fontWeight={500}
            >
              Join
            </Button>
          </Flex>
        </Flex>
        <Divider />

        <Flex align="center" justify="space-between" mt={2} px={5} pb={2}>
          <Flex align="center">
            <Avatar src={data?.topGroups[2].logoImgUrl} size="sm" />
            <Text fontWeight={500} fontSize={16} ml={2}>
              {data?.topGroups[2].name}
            </Text>
          </Flex>          

          <Flex justify="flex-end">
            <Button
              colorScheme="blue"
              borderRadius="md"
              px={5}
              h={8}
              fontWeight={500}
            >
              Join
            </Button>
          </Flex>
        </Flex>
        <Divider />

        <Flex align="center" justify="space-between" mt={2} px={5} pb={2}>
          <Flex align="center">
            <Avatar src={data?.topGroups[3].logoImgUrl} size="sm" />
            <Text fontWeight={500} fontSize={16} ml={2}>
              {data?.topGroups[3].name}
            </Text>
          </Flex>          

          <Flex justify="flex-end">
            <Button
              colorScheme="blue"
              borderRadius="md"
              px={5}
              h={8}
              fontWeight={500}
            >
              Join
            </Button>
          </Flex>
        </Flex>
        <Divider />

        <Flex justify="center" mt={2}>
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
