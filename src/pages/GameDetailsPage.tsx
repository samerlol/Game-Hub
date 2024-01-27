import { GridItem, Heading, SimpleGrid, Spinner } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import ExpandableText from '../components/ExpandableText';
import GameAttributes from '../components/GameAttributes';
import useGame from '../hooks/useGame';
import GameTrailer from '../components/GameTrailer';
import GameScreenshots from '../components/GameScreenshots';

export const GameDetailsPage = () => {
  const { slug } = useParams();
  if(!slug) return null;
  
  const { data: game, isLoading, error} = useGame(slug);

  if(isLoading)
    <Spinner/>

  if(error || !game)
    return null;  
  

  return (
    <>
      <SimpleGrid columns={{
        base: 1,
        md: 2
      }}
      spacing={5}
      >
        <GridItem>
          <Heading>{game.name}</Heading>
          <ExpandableText>{game.description_raw}</ExpandableText>
          <GameAttributes game={game} />
        </GridItem>
        <GridItem>
          <GameTrailer slug={game.slug}/>
          <GameScreenshots gameId={game.id}/>
        </GridItem>
      </SimpleGrid>
    </>
  )
}
