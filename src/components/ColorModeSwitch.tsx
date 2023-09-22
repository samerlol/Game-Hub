import { Switch, useColorMode } from '@chakra-ui/react'

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Switch isChecked={colorMode === 'dark'} onChange={toggleColorMode} whiteSpace={'nowrap'}>Dark Mode</Switch>
  )
}

export default ColorModeSwitch;
