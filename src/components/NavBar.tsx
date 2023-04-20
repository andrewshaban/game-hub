import { HStack, Image, Text } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

type Props = {};

function NavBar({}: Props) {
  return (
    <HStack pr='5'>
      <Image src={logo} boxSize='60px' />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
