import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo3.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <HStack padding="10px">
        <Link to={"/"}>
          <Image src={logo} boxSize={"75px"} minWidth={"80px"}></Image>
        </Link>

        <SearchInput />
        <ColorModeSwitch />
      </HStack>
    </div>
  );
};

export default NavBar;
