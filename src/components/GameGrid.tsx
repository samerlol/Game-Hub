import React from 'react'
import useGames from '../hooks/useGames'
import GameCard from './GameCard';
import { SimpleGrid } from '@chakra-ui/react';

const GameGrid = () => {
   const {games, isLoading, error}= useGames();

    if(error)
        return error;
    
    if(isLoading)
        return 'loading...';
   return (
    <SimpleGrid columns={{
      sm: 1,
      md:2,
      lg:3,
      xl:4
    }} spacing={5} padding={5}>
      {games.map(game=><GameCard key={game.id} game={game} />)}
    </SimpleGrid>
   );
}

export default GameGrid