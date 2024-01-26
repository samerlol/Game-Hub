import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';
import useGameQueryStore from '../store';


export const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore(s => s.setSearchText);  
  return (
    <form onSubmit={(e)=>{
        e.preventDefault();
        setSearchText(ref.current?.value || '')
    }}>
      <InputGroup >
          <InputLeftElement><BsSearch/></InputLeftElement>
          <Input variant='filled' placeholder='Search Games...' borderRadius={20} ref={ref}></Input>
      </InputGroup>
    </form>   
  )
}
