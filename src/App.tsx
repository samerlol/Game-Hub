import { Box, Grid, GridItem, HStack, Show,  } from '@chakra-ui/react'

import "./App.css";
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';
import { Genre } from './hooks/useGenres';
import PlatformSelector from './components/PlatformSelector';
import { Platform } from './hooks/usePlatforms';
import SortSelector from './components/SortSelector';
import { GameHeading } from './components/GameHeading';

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  ordering: string | null;
  search: string | undefined;
}
function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"` //1024px
    }}
    templateColumns={{
      base: '1fr',
      lg: '200px 1fr',
    }}
    >
      <GridItem area={"nav"}>
        <NavBar setGameQuery={setGameQuery} gameQuery={gameQuery} />
      </GridItem>
      <Show above='lg'>
        <GridItem area={"aside"} paddingX={5}>
          <GenreList gameQuery={gameQuery} setGameQuery={setGameQuery} />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <Box paddingLeft={5}>
          <GameHeading gameQuery={gameQuery} />
          <HStack spacing={5}  marginBottom={5}>
            <PlatformSelector setGameQuery={setGameQuery} gameQuery={gameQuery} />
            <SortSelector setGameQuery={setGameQuery} gameQuery={gameQuery} />
          </HStack>
        </Box>
        <GameGrid  gameQuery={gameQuery}  />

      </GridItem>
    </Grid>
  );
}

export default App;
