import { Card, CardBody, CardFooter, Flex, Heading, Image, Stack } from '@chakra-ui/react';
import Game from "../entities/Game";
import getCroppedImageUrl from '../services/image-url';
import CriticScore from './CriticScore';
import Emoji from './Emoji';
import PlatformStack from './PlatformStack';
import { Link } from 'react-router-dom';
interface Props {
    game: Game;
}

const GameCard = ({ game }: Props)=> {
    const platforms =game.parent_platforms.map(platform => platform.platform);
    return (
            <Card height={'md'}>
                <Image
                src={getCroppedImageUrl(game.background_image)}
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
                        <Heading size='lg' fontSize={24}>
                        <Link to={`/games/${game.slug}`}>
                            {game.name} 
                        </Link>
                        <Emoji rating={game.rating_top} /></Heading>
                    </Stack>
                </CardFooter>
            </Card>
    );
}

export default GameCard