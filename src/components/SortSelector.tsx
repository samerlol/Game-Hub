import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import useGameQueryStore from '../store';

const sortSelector = () => {
  const ordering= useGameQueryStore(s=>s.gameQuery.ordering);
  const setSortOrder= useGameQueryStore(s=>s.setSortOrder);
  const sortOrders = [
    {
      value:'',
      label: 'Relevance',
    },    
    {
      value:'-added',
      label: 'Date added',
    },    
    {
      value:'name',
      label: 'Name',
    },    
    {
      value:'-released',
      label: 'Release date',
    },    
    {
      value:'-metacritic',
      label: 'Popularity',
    },    
    {
      value:'-rating',
      label: 'Average rating',
    },
  ];
  const currentSortOrder = sortOrders.find(o => o.value === ordering);
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>}>Order By: {currentSortOrder?.label || 'Relevance'}</MenuButton>
        <MenuList>
          {sortOrders.map(order =><MenuItem key={order.value} onClick={()=>setSortOrder(order.value)}>{order.label}</MenuItem>)}
        </MenuList>
    </Menu>
  )
}

export default sortSelector