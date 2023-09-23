import { Platform } from '../hooks/useGames'
import {AiFillWindows, AiFillAndroid, AiFillApple} from 'react-icons/ai';
import {DiLinux} from 'react-icons/di';
import { BsXbox, BsNintendoSwitch, BsPlaystation} from 'react-icons/bs';
import {SiMacos} from 'react-icons/si';
import { HStack, Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons';

interface Props {
    platforms: Platform[];
}
const PlatformStack = ({platforms}: Props ) => {
    // console.log({platforms});
    const icons:{ [key: string]: IconType} = {
        pc: AiFillWindows,
        playstation: BsPlaystation,
        xbox: BsXbox,
        linux: DiLinux,
        android: AiFillAndroid,
        nintendo: BsNintendoSwitch,
        mac: AiFillApple,
    }
  return (
    <HStack spacing={3}>
        {platforms.map(platform =><Icon as={icons[platform.slug]} fontSize={20} color='gray.500'/>)}
    </HStack>
  )
}

export default PlatformStack