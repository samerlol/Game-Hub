import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import {  BsChevronDown } from "react-icons/bs"
import usePlatforms from "../hooks/usePlatforms"

function PlatformSelector() {
    const { data, error, isLoading } = usePlatforms();

    if(isLoading) return;
    if(error) return;
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>}>Platforms</MenuButton>
        <MenuList>
            {data.map(menu =><MenuItem key={menu.id}>{menu.name}</MenuItem>)}
        </MenuList>
    </Menu>
  )
}

export default PlatformSelector