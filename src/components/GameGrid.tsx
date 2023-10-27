import React from 'react'
import useGames from '../hooks/useGames'
import GameCard from './GameCard';
import { SimpleGrid } from '@chakra-ui/react';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { Genre } from '../hooks/useGenres';
import { Platform } from '../hooks/usePlatforms';
interface Props{
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;

}
const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
   const { data, isLoading, error}= useGames(selectedGenre, selectedPlatform);
    const arr = [1,2,3,4,5,6,7,8];

    if(error)
        return error;

   return (
    <SimpleGrid columns={{
      sm: 1,
      md:2,
      lg:3,
      xl:4
    }} spacing={0} padding={5} gap={5} >
      {isLoading && arr.map(game=><GameCardContainer key={game}><GameCardSkeleton  /></GameCardContainer>)}
      {data.map(game=><GameCardContainer key={game.id}><GameCard game={game} /></GameCardContainer>)}
    </SimpleGrid>
   );
}

export default GameGrid