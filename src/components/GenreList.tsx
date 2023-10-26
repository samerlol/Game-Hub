import { HStack, List, ListItem, Image, Text, Spinner, Button, Flex } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres'
import getCroppedImageUrl from '../services/image-url';

const GenreList = () => {
  const { data, isLoading, error} = useGenres();
  if(error)
    return null;
  if(isLoading)
        return <Spinner />
    return (
        <List>
        {data.map(genre => <ListItem key={genre.id} paddingY={1}>
            <HStack>
                <Image src={getCroppedImageUrl(genre.image_background)} boxSize={'32px'} borderRadius={10} alt='img'/>
                <Button fontSize='lg' variant={'link'} whiteSpace={'normal'}>{genre.name}</Button>
            </HStack>
            </ListItem>)}
    </List>
  )
}

export default GenreList