import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';
import PlatformSelector from './components/PlatformSelector';

function App() {
  const [genreId, setGenreId] = useState(0);
  const [platformId, setPlatformId] = useState(0);

  return (
    <Grid
      templateAreas={{
        base: `'nav' 'main'`,
        lg: `'nav nav' 'aside main'`, // wider than 1024px
      }}
      templateColumns={{ base: '1fr', lg: '200px 1fr' }}>
      <GridItem pl='3' area={'nav'}>
        <NavBar />
      </GridItem>
      <Show above='lg'>
        <GridItem pl='5' area={'aside'}>
          <GenreList setGenreId={setGenreId} />
        </GridItem>
      </Show>
      <GridItem pl='5' area={'main'}>
        <PlatformSelector onSelect={setPlatformId} />
        <GameGrid genreId={genreId} platformId={platformId} />
      </GridItem>
    </Grid>
  );
}

export default App;
