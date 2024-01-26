import { SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardContainer from './GameCardContainer';
import GameCardSkeleton from './GameCardSkeleton';

const GameGrid = () => {
  const { data, isLoading, error, fetchNextPage, hasNextPage}= useGames();
    const arr = [1,2,3,4,5,6,7,8];

    if(error)
        return <Text>{error.message}</Text>;

   const fetchedGamesCount = data?.pages.reduce((total, page)=> total+page.results.length, 0) || 0;    
   return (
      <InfiniteScroll
        dataLength={fetchedGamesCount}
        hasMore={!!hasNextPage}
        next={fetchNextPage}
        loader={<Spinner/>}
      >
      <SimpleGrid columns={{
        sm: 1,
        md:2,
        lg:3,
        xl:4
      }} spacing={0} gap={5} padding={5} >
        {isLoading && arr.map(game=><GameCardContainer key={game}><GameCardSkeleton  /></GameCardContainer>)}
        {data?.pages.map((page, ind)=> 
        <React.Fragment key={ind}>
          {page.results.map(game=> <GameCardContainer key={game.id}><GameCard game={game} /></GameCardContainer>)}
        </React.Fragment>)}
      </SimpleGrid>
      </InfiniteScroll>
   );
}

export default GameGrid