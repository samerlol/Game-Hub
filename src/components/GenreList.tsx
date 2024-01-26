import { Button, HStack, Heading, Image, List, ListItem, Spinner } from '@chakra-ui/react';
import { GameQuery } from '../App';
import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';

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
        {data?.results.map(genre => <ListItem key={genre.id} paddingY={genre.id === gameQuery.genreId? 4:1}>
            <HStack>
                <Image src={getCroppedImageUrl(genre.image_background)} 
                  boxSize={'32px'} 
                  borderRadius={10} 
                  alt='img' 
                  objectFit={'cover'}/>
                <Button textAlign={'left'} 
                  fontWeight={genre.id === gameQuery.genreId?'bold': 'normal'} 
                  fontSize='lg' variant={'link'} whiteSpace={'normal'} 
                  onClick={()=>setGameQuery({...gameQuery, genreId: genre.id})}>{genre.name}</Button>
            </HStack>
            </ListItem>)}
        </List>
        </>
  )
}

export default GenreList