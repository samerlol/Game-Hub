import { Card, CardBody, Text, Heading, Stack, CardFooter, Image, Flex } from '@chakra-ui/react';
import { Game } from '../hooks/useGames';
import PlatformStack from './PlatformStack';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '../services/image-url';
interface Props {
    game: Game;
}

const GameCard = ({ game }: Props)=> {
    const platforms =game.parent_platforms.map(platform => platform.platform);
  return (
    <Card height={'md'}>
        <Image
        src={getCroppedImageUrl(game.background_image || '')}
        alt={game.name}
        objectFit={'cover'}
        borderRadius='lg'
        height={'300px'}
        />
        <CardBody paddingBottom={0}>
            <Flex justifyContent={'space-between'}>
            <PlatformStack platforms={platforms} />
            <CriticScore score={game.metacritic}/>
            </Flex>
        </CardBody>
        <CardFooter>
            <Stack mt='6' spacing='3'>
                <Heading size='lg' fontSize={24}>{game.name}</Heading>
            </Stack>
        </CardFooter>
    </Card>
  )
}

export default GameCard