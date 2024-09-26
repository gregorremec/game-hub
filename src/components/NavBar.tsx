import { HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo3.png";

const NavBar = () => {
  return (
    <div>
      <HStack>
        <Image src={logo} boxSize={"80px"}></Image>
        <Text>Nav Bar</Text>
      </HStack>
    </div>
  );
};

export default NavBar;
