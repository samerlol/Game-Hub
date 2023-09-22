import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { BsSearch } from 'react-icons/bs'

export const SearchInput = () => {
  return (
    <InputGroup >
        <InputLeftElement><BsSearch/></InputLeftElement>
        <Input variant='filled' placeholder='Search Games...' borderRadius='20px'></Input>
    </InputGroup>   
  )
}
