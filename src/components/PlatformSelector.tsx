import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../store";


function PlatformSelector() {
    const { data: platforms, error, isLoading } = usePlatforms();
    const selectedPlatformId = useGameQueryStore(s => s.gameQuery.platformId);
    const setPlatformId = useGameQueryStore(s => s.setPlatformId);
    const selectedPlatform = usePlatform(selectedPlatformId);

    if(isLoading) <p>Loading..</p>;
    if(error) return <p>{error.message}</p>;

    return (
      <Menu>
          <MenuButton as={Button} rightIcon={<BsChevronDown/>}>{!!selectedPlatformId?selectedPlatform?.name:'Platforms'}</MenuButton>
          <MenuList>
              {platforms?.results.map(platform =><MenuItem key={platform.id} onClick={()=>setPlatformId(platform.id)}>{platform.name}</MenuItem>)}
          </MenuList>
      </Menu>
  )
}

export default PlatformSelector