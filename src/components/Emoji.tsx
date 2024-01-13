import { Image, ImageProps } from '@chakra-ui/react';
import bullEye from '../assets/Emojis/bulls-eye.webp';
import meh from '../assets/Emojis/meh.webp';
import thumpsUp from '../assets/Emojis/thumbs-up.webp';

interface Props{
    rating: number;
}
const Emoji = ({rating}: Props) => {

    // if(rating < 3) return;

    const emojiMap: {[key: number]: ImageProps} = {
        3: { src: meh, alt: 'meh', boxSize:'25px'},
        4: { src: thumpsUp, alt: 'Recommended', boxSize:'25px'},
        5: { src: bullEye, alt: 'Exceptional', boxSize:'30px'},
    }

  return (
    <Image {...emojiMap[rating]} marginTop={2}></Image>
  )
}

export default Emoji