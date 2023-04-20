import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatforms from '../hooks/usePlatforms';
import { useState } from 'react';

type Props = {
  onSelect: (id: number) => void;
};

const PlatformSelector = ({ onSelect }: Props) => {
  const { data } = usePlatforms();
  const [platformName, setPlatformName] = useState('');

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {platformName ? platformName : 'Platforms'}
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem
            onClick={() => {
              setPlatformName(platform.name);
              onSelect(platform.id);
            }}
            key={platform.id}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
