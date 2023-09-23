import { Card, CardBody, Text, Heading, Stack, CardFooter, Image } from '@chakra-ui/react';
import { Game } from '../hooks/useGames';
import PlatformStack from './PlatformStack';

interface Props {
    game: Game;
}

const GameCard = ({ game }: Props)=> {
    const platforms =game.platforms.map(platform => platform.platform);
  return (
    <Card maxW='lg'>
         <Image
        src={game.background_image}
        alt={game.name}
        borderRadius='lg'
      />
    <CardBody>
     <PlatformStack platforms={platforms} />
     
    </CardBody>
    <CardFooter>
    <Stack mt='6' spacing='3'>
        <Heading size='md'>{game.name}</Heading>
      </Stack>
    </CardFooter>
  </Card>
  )
}

export default GameCard