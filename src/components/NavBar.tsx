import { HStack, Image, Text } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';

type Props = {};

function NavBar({}: Props) {
  return (
    <HStack pr='5' justifyContent={'space-between'}>
      <Image src={logo} boxSize='60px' />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
