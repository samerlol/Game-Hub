import { HStack, List, ListItem, Image, Text, Spinner, Button, Flex, Heading } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres'
import getCroppedImageUrl from '../services/image-url';
import { Platform } from '../hooks/usePlatforms';
import { GameQuery } from '../App';
interface Props{
  setGameQuery: (gameQuery: GameQuery)=> void;
  gameQuery: GameQuery
}
const GenreList = ({ gameQuery, setGameQuery }: Props) => {
  const { data, isLoading, error} = useGenres();
  if(error)
    return null;
  if(isLoading)
        return <Spinner />
    return (
        <>
        <Heading as={'h4'} fontSize={'2xl'} marginBottom={3}>Genres</Heading>
        <List>
        {data.map(genre => <ListItem key={genre.id} paddingY={genre.id === gameQuery.genre?.id? 4:1}>
            <HStack>
                <Image src={getCroppedImageUrl(genre.image_background)} 
                  boxSize={'32px'} 
                  borderRadius={10} 
                  alt='img' 
                  objectFit={'cover'}/>
                <Button textAlign={'left'} 
                  fontWeight={genre.id === gameQuery.genre?.id?'bold': 'normal'} 
                  fontSize='lg' variant={'link'} whiteSpace={'normal'} 
                  onClick={()=>setGameQuery({...gameQuery, genre})}>{genre.name}</Button>
            </HStack>
            </ListItem>)}
        </List>
        </>
  )
}

export default GenreList