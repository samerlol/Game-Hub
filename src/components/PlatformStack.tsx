import React from 'react'
import { Platform } from '../hooks/useGames'
import {AiFillWindows, AiFillAndroid} from 'react-icons/ai';
import {DiLinux} from 'react-icons/di';
import { BsXbox, BsNintendoSwitch} from 'react-icons/bs';
import {LiaGamepadSolid} from 'react-icons/lia';
import {SiPlaystation2,SiPlaystation3,SiPlaystation4,SiPlaystation5, SiMacos} from 'react-icons/si';
import { HStack, Icon, Image } from '@chakra-ui/react';

interface Props {
    platforms: Platform[];
}
const PlatformStack = ({platforms}: Props ) => {
    // console.log({platforms});
    const icons:{ [key]: string} = {
        "PC": AiFillWindows,
        "ps-4": SiPlaystation4,
        "ps-5": SiPlaystation5,
        "ps-3":SiPlaystation3,
        "ps-2":SiPlaystation2,
        "linux": DiLinux,
        "ps-vita":LiaGamepadSolid,
        "android": AiFillAndroid,
        "xbox": BsXbox,
        "xbox-one": BsXbox,
        "nintendo": BsNintendoSwitch,
        "macos": SiMacos,
    }
  return (
    <HStack>
        {platforms.map(platform =><Icon as={icons[platform.slug]} alt='platform'/>)}
    </HStack>
  )
}

export default PlatformStack