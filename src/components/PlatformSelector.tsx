import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatforms, { Platform } from '../hooks/usePlatforms';
import { useState } from 'react';

type Props = {
  setPlatform: (platform: Platform) => void;
};

const PlatformSelector = ({ setPlatform }: Props) => {
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
              setPlatform(platform);
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
