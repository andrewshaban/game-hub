import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';

type Props = {
  onSelectSortOrder: (sortOrder: string) => void;
};

const SortSelector = ({ onSelectSortOrder }: Props) => {
  const [selectedSoftOrder, setSelectedSoftOrder] = useState('Relevance');
  const sortOrders = [
    { value: '', label: 'Relevance' },
    { value: '-added', label: 'Date added' },
    { value: 'name', label: 'Name' },
    { value: '-released', label: 'Release date' },
    { value: '-metacritic', label: 'Popularity' },
    { value: '-rating', label: 'Average rating' },
  ];
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {selectedSoftOrder}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => {
              setSelectedSoftOrder(order.label);
              onSelectSortOrder(order.value);
            }}
            key={order.value}
            value={order.value}>
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
