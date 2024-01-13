import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { GameQuery } from "../App";
import usePlatforms from "../hooks/usePlatforms";

interface Props{
    gameQuery: GameQuery;
    setGameQuery: (gameQuery: GameQuery) => void;
}

function PlatformSelector({gameQuery, setGameQuery} : Props) {
    const { data: platforms, error, isLoading } = usePlatforms();

    if(isLoading) <p>Loading..</p>;
    if(error) return <p>{error.message}</p>;
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