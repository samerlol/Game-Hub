import { Heading, Spinner } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import ExpandableText from '../components/ExpandableText';
import GameAttributes from '../components/GameAttributes';
import useGame from '../hooks/useGame';

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
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameAttributes game={game} />
    </>
  )
}
