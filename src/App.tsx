import { Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';
import PlatformSelector from './components/PlatformSelector';
import SortSelector from './components/SortSelector';

export interface GameQuery {
  genreId: number | null;
  platformId: number | null;
  sortOrder: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
          <GenreList
            setGenreId={(genreId) => setGameQuery({ ...gameQuery, genreId })}
          />
        </GridItem>
      </Show>
      <GridItem pl='5' area={'main'}>
        <HStack spacing={5} paddingLeft={5}>
          <PlatformSelector
            onSelect={(platformId) =>
              setGameQuery({ ...gameQuery, platformId })
            }
          />
          <SortSelector
            onSelectSortOrder={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
          />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
