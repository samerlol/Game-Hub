import { Button, HStack, Heading, Image, List, ListItem, Spinner } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';
import useGameQueryStore from '../store';


const GenreList = () => {
  const { data, isLoading, error} = useGenres();
  const selectedGenreId = useGameQueryStore(s => s.gameQuery.genreId);
  const { setGenreId } = useGameQueryStore();
  if(error)
    return null;
  if(isLoading)
        return <Spinner />
    return (
        <>
        <Heading as={'h4'} fontSize={'2xl'} marginBottom={3}>Genres</Heading>
        <List>
        {data?.results.map(genre => <ListItem key={genre.id} paddingY={genre.id === selectedGenreId? 4:1}>
            <HStack>
                <Image src={getCroppedImageUrl(genre.image_background)} 
                  boxSize={'32px'} 
                  borderRadius={10} 
                  alt='img' 
                  objectFit={'cover'}/>
                <Button textAlign={'left'} 
                  fontWeight={genre.id === selectedGenreId ?'bold': 'normal'} 
                  fontSize='lg' variant={'link'} whiteSpace={'normal'} 
                  onClick={()=>setGenreId(genre.id)}>{genre.name}</Button>
            </HStack>
            </ListItem>)}
        </List>
        </>
  )
}

export default GenreList