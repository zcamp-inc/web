import { Box } from "@chakra-ui/react";
import React from "react";
import Home from "../pages/home";
import Trending from "../pages/trending";
import Layout from "./Layout";

export function BottomNavContent({ index }: { index: number | string | any }) {
  return (
    <Box>
      {index === 0 && (
        <Home />
      )}
      {index === 1 && (
       <Trending />
      )}
    </Box>
  );
}
