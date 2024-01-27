import { HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from '../assets/Logo/logo.webp';
import ColorModeSwitch from "./ColorModeSwitch";
import { SearchInput } from './SearchInput';

const NavBar = () => {
  return (
    <HStack padding={3}>
        <Link to='/'>
          <Image src={logo} alt="Logo" boxSize={"60px"} objectFit='cover'/>
        </Link>
        <SearchInput />
        <ColorModeSwitch/>
    </HStack>
  )
}

export default NavBar