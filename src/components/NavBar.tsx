import { HStack, Image } from "@chakra-ui/react";
import { GameQuery } from "../App";
import logo from '../assets/Logo/logo.webp';
import ColorModeSwitch from "./ColorModeSwitch";
import { SearchInput } from './SearchInput';

interface Props{
  gameQuery: GameQuery;
  setGameQuery: (gameQuery: GameQuery) => void;
}
const NavBar = ({gameQuery, setGameQuery } : Props) => {
  return (
    <HStack padding={3}>
        <Image src={logo} alt="Logo" boxSize={"60px"}/>
        <SearchInput setGameQuery={setGameQuery} gameQuery={gameQuery} />
        <ColorModeSwitch/>
    </HStack>
  )
}

export default NavBar