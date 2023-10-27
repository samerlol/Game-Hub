import { Platform } from '../hooks/usePlatforms'
import {AiFillWindows, AiFillAndroid, AiFillApple} from 'react-icons/ai';
import {DiLinux} from 'react-icons/di';
import { BsXbox, BsNintendoSwitch, BsPlaystation} from 'react-icons/bs';
import { HStack, Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons';

interface Props {
    platforms: Platform[];
}
export const icons:{ [key: string]: IconType} = {
  pc: AiFillWindows,
  playstation: BsPlaystation,
  xbox: BsXbox,
  linux: DiLinux,
  android: AiFillAndroid,
  nintendo: BsNintendoSwitch,
  mac: AiFillApple,
}
const PlatformStack = ({platforms}: Props ) => {
    // console.log({platforms});

  return (
    <HStack spacing={3}>
        {platforms.map(platform =><Icon key={platform.id} as={icons[platform.slug]} fontSize={20} color='gray.500'/>)}
    </HStack>
  )
}

export default PlatformStack