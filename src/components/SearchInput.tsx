import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { BsSearch } from 'react-icons/bs'
import { GameQuery } from '../App';
import { useRef } from 'react';

interface Props{
  gameQuery: GameQuery;
  setGameQuery: (gameQuery: GameQuery) => void;
}
export const SearchInput = ({gameQuery, setGameQuery } : Props) => {
  const ref = useRef<HTMLInputElement>(null);
  
  return (
    <form onSubmit={(e)=>{
        e.preventDefault();
        console.log({value: ref.current?.value});
        setGameQuery({...gameQuery, search: ref.current?.value});
    }}>
      <InputGroup >
          <InputLeftElement><BsSearch/></InputLeftElement>
          <Input variant='filled' placeholder='Search Games...' borderRadius={20} ref={ref}></Input>
      </InputGroup>
    </form>   
  )
}
