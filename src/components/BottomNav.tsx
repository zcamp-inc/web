import { FiHome, FiTrendingUp, FiSettings, FiBookmark } from "react-icons/fi";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import { BsListStars } from "react-icons/bs";

import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { BottomNavigation, BottomNavigationItem, BottomNavigationIcon } from "chakra-ui-bottom-navigation";
import { BottomNavContent } from "./BottomNavContent";

export default function BottomNav() {
    const [index, setIndex] = useState<number | string | any>(0);
    console.log("render", { index });

    return (
        <Box>
            <BottomNavContent index={index} />

            <BottomNavigation 
                value={index}
                onChange={setIndex}
                bg="#white"
                color="#000a16"
                variant="float"
                height="10vh"             
                
            >
                <BottomNavigationItem>
                    <BottomNavigationIcon as={FiHome} fontSize={24} />
                </BottomNavigationItem>

                <BottomNavigationItem>
                    <BottomNavigationIcon as={HiOutlineViewGridAdd} fontSize={24} />
                </BottomNavigationItem>

                <BottomNavigationItem>
                    <BottomNavigationIcon as={BsListStars} fontSize={24} />
                </BottomNavigationItem>

            </BottomNavigation>

        </Box>

    )
}