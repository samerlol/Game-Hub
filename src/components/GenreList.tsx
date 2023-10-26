import { HStack, List, ListItem, Image, Text, Spinner, Button, Flex } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres'
import getCroppedImageUrl from '../services/image-url';
interface Props{
  onSelectGenre: (genre: Genre)=> void;
  selectedGenre: Genre | null;
}
const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error} = useGenres();
  if(error)
    return null;
  if(isLoading)
        return <Spinner />
    return (
        <List>
        {data.map(genre => <ListItem key={genre.id} paddingY={genre.id === selectedGenre?.id? 4:1}>
            <HStack>
                <Image src={getCroppedImageUrl(genre.image_background)} boxSize={'32px'} borderRadius={10} alt='img'/>
                <Button fontWeight={genre.id === selectedGenre?.id?'bold': 'normal'} fontSize='lg' variant={'link'} whiteSpace={'normal'} onClick={()=>onSelectGenre(genre)}>{genre.name}</Button>
            </HStack>
            </ListItem>)}
    </List>
  )
}

export default GenreList