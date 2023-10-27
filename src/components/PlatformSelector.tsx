import { Button, Icon, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import {  BsChevronDown } from "react-icons/bs"
import usePlatforms, { Platform } from "../hooks/usePlatforms"
import { icons } from "./PlatformStack";

interface Props{
    selectedPlatform: Platform | null;
    setSelectedPlatform: (platform: Platform) => void;
}
function PlatformSelector({selectedPlatform, setSelectedPlatform}:Props) {
    const { data, error, isLoading } = usePlatforms();

    if(isLoading) return;
    if(error) return;
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>}>{!!selectedPlatform?selectedPlatform.name:'Platforms'}</MenuButton>
        <MenuList>
            {data.map(platform =><MenuItem key={platform.id} onClick={()=>setSelectedPlatform(platform)}>{platform.name}</MenuItem>)}
        </MenuList>
    </Menu>
  )
}

export default PlatformSelector