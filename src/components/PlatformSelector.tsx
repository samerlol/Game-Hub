import { Button, Icon, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import {  BsChevronDown } from "react-icons/bs"
import usePlatforms from "../hooks/usePlatforms"
import { GameQuery } from "../App";
import { Platform } from "../services/platformServices";
interface Props{
    gameQuery: GameQuery;
    setGameQuery: (gameQuery: GameQuery) => void;
}
function PlatformSelector({gameQuery, setGameQuery} : Props) {
    const { data: platforms, error, isLoading } = usePlatforms();

    if(isLoading) return;
    if(error) return;
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>}>{!!gameQuery.platform?gameQuery.platform.name:'Platforms'}</MenuButton>
        <MenuList>
            {platforms?.results.map(platform =><MenuItem key={platform.id} onClick={()=>setGameQuery({...gameQuery, platform})}>{platform.name}</MenuItem>)}
        </MenuList>
    </Menu>
  )
}

export default PlatformSelector