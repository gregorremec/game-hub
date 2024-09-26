import { HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo3.png";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <div>
      <HStack justifyContent="space-between" padding="10px">
        <Image src={logo} boxSize={"80px"}></Image>
        <ColorModeSwitch />
      </HStack>
    </div>
  );
};

export default NavBar;
