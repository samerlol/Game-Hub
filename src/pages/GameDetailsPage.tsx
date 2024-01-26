import { Heading, Spinner, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import useGame from '../hooks/useGame';
import ExpandableText from '../components/ExpandableText';

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
    </>
  )
}
