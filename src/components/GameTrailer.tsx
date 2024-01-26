import useGameTrailer from '../hooks/useGameTrailer';

interface Props {
    slug: string;
}
const GameTrailer = ({slug}: Props) => {
    
   const {data, error, isLoading} = useGameTrailer(slug);

   if(isLoading)
    return null;
   if(error)
        throw error;
   const first = data?.results[0]; 

   return first ? ( 
    <video 
        src={first.data[480]}
        poster={first.preview}
        controls
    />): null;
}

export default GameTrailer