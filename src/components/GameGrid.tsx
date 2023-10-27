import useGames from '../hooks/useGames'
import GameCard from './GameCard';
import { SimpleGrid, Text } from '@chakra-ui/react';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { GameQuery } from '../App';
interface Props{
  gameQuery: GameQuery;

}
const GameGrid = ({ gameQuery }: Props) => {
   const { data, isLoading, error}= useGames(gameQuery);
    const arr = [1,2,3,4,5,6,7,8];

    if(error)
        return <Text>{error}</Text>;

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