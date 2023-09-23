import React from 'react'
import useGames from '../hooks/useGames'
import GameCard from './GameCard';
import { SimpleGrid } from '@chakra-ui/react';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';

const GameGrid = () => {
   const {games, isLoading, error}= useGames();
    const arr = [1,2,3,4,5,6,6,7];
    if(error)
        return error;
    
   return (
    <SimpleGrid columns={{
      sm: 1,
      md:2,
      lg:3,
      xl:4
    }} spacing={1} padding={5} gap={10}>
      {isLoading && arr.map(game=><GameCardContainer key={game}><GameCardSkeleton  /></GameCardContainer>)}
      {games.map(game=><GameCardContainer key={game.id}><GameCard game={game} /></GameCardContainer>)}
    </SimpleGrid>
   );
}

export default GameGrid