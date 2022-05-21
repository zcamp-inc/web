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
          w={48}       
          borderRadius="lg"
          role="group"          
          cursor="pointer"
          color="#000a16"
          fontWeight= {500}
          _hover={{ bg: "#DDB2FF", color: "#5E00AB", fontWeight: 600 }}
          {...rest}
        >
            {icon && (
              <Icon
                mr="15px"
                fontSize={{ base: 24, md: 30 }}
                _groupHover={{ color: "#5E00AB" }}
                as={icon}
                strokeWidth={1.7}
                
              />
            )}
            <Text fontSize={{base: "1.05rem", lg: "1.3rem"}}  >
              {label}
            </Text>
        </Flex>
      </a>
    </NextLink>
  );
}
