import { HStack, Image } from "@chakra-ui/react";
import logo from '../assets/Logo/logo.webp';
import ColorModeSwitch from "./ColorModeSwitch";
import { SearchInput } from './SearchInput';

const NavBar = () => {
  return (
    <HStack padding={3}>
        <Image src={logo} alt="Logo" boxSize={"60px"}/>
        <SearchInput />
        <ColorModeSwitch/>
    </HStack>
  )
}

export default NavBar