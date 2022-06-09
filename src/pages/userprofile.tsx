import {
  Box,
  Flex,
  Avatar,
  Badge,
  Stack,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";
import { Layout } from "../components/Layout";

const UserProfile = () => {
  return (
    <Layout>
      <Flex direction="row" justify="space-between" ml={{ base: 0, md: -80 }}>
        <Flex direction='row'>
          <Avatar size="lg" />
          <Stack ml={3}>
            <Heading fontSize={{ base: 14, md: 24 }} fontWeight={600} mb={-2}>
              John Doe 
            </Heading>
            <Text>
                @username 
            </Text>
            <Flex>
              <Flex mr={{ base: 0, md: 10}}>
                <Text fontSize="1rem" fontWeight={600} mr={2}>
                  100k
                </Text>
                <Text> Upvotes </Text>
              </Flex>

              <Flex mr={{ base: 0, md:10 }}>
                <Text fontSize="1rem" fontWeight={600} mr={2}>
                  103
                </Text>
                <Text> Points </Text>
              </Flex>

              <Box>
                <Badge colorScheme="yellow" variant="solid">
                  L1 USER
                </Badge>
              </Box>
            </Flex>
          </Stack>
        </Flex>
        <Flex direction="row" justify="flex-end">
          <Button size='sm' colorScheme='pink' fontWeight={400}>Edit Profile</Button>
        </Flex>
      </Flex>
    </Layout>
  );
};

export default UserProfile;
