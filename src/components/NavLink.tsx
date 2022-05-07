import NextLink from "next/link";
import { Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";

export default function NavLink({ link, ...rest }: { link: any }) {
  const { label, icon, href } = link;

  return (
    <NextLink href={href} passHref>
      <a>
        <Flex
          align="center"
          p={4}
          mx={4}
          borderRadius="lg"
          role="group"
          cursor="pointer"
          _hover={{ bg:'#FF55A8', color: 'white' }}
          {...rest}
        >
          {icon && (
            <Icon
              mr={4}
              fontSize={26}
              _groupHover={{ color: "white" }}
              as={icon}
            />
          )}
          <Text fontSize="1.2rem" fontWeight={600}>{label}</Text>
        </Flex>
      </a>
    </NextLink>
  );
}
