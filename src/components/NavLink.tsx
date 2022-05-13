import NextLink  from "next/link";
import { Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";


export default function NavLink({ link, ...rest }: { link: any }) {
  const { label, icon, href } = link;



  return (
    <NextLink href={href} passHref {...rest}>
      <a>
        <Flex
          align="center"
          p={4}
          mx={4}
          borderRadius="lg"
          role="group"          
          cursor="pointer"
          color="#000a16"
          _hover={{ bg: "#DDB2FF", color: "#5E00AB", fontWeight: 600 }}
          {...rest}
        >
            {icon && (
              <Icon
                mr={4}
                fontSize={24}
                _groupHover={{ color: "#5E00AB" }}
                as={icon}
              />
            )}
            <Text fontSize="1.1rem"  >
              {label}
            </Text>
        </Flex>
      </a>
    </NextLink>
  );
}
