import { Image, SimpleGrid, Spinner } from '@chakra-ui/react';
import useGameScreenshots from '../hooks/useGameScreenshots';

interface Props{
    gameId: number;
}
const GameScreenshots = ({gameId}: Props) => {
  const {data, error, isLoading } = useGameScreenshots(gameId);

  if(isLoading)
    return <Spinner />

  if(error)
    throw error;

  return (
    <SimpleGrid 
    spacing={2}
    columns={{
      base: 1,
      md: 2,
    }}>
      {data?.results.map(result=> <Image key={result.image} src={result.image}></Image>)}
    </SimpleGrid>
  )
}

export default GameScreenshots