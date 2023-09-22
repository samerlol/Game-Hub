import { Flex, HStack, Image, Input, InputGroup, InputLeftElement, Switch, useColorMode } from "@chakra-ui/react"
import logo from '../assets/Logo/logo.webp';
import {BsSearch} from 'react-icons/bs';
const NavBar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
          <Image src={logo} alt="Logo" boxSize={"60px"}/>
        <InputGroup>
            <InputLeftElement><BsSearch/></InputLeftElement>
            <Input variant='filled' placeholder='Search Games...'></Input>
        </InputGroup>
        <Switch onClick={toggleColorMode} whiteSpace={'nowrap'}> {colorMode === 'light' ? 'Dark' : 'Light'} Mode</Switch>
    </HStack>
  )
}

export default NavBar