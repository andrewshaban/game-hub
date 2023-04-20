import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/imageUrl';
import { useState } from 'react';

type Props = {
  setGenre: (genre: Genre) => void;
};

const GenreList = ({ setGenre }: Props) => {
  const { data, isLoading } = useGenres();
  const [selectedGenreId, setSelectedGenreId] = useState(0);
  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading fontSize='2xl' marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY={1}>
            <HStack>
              <Image
                objectFit='cover'
                boxSize={9}
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                onClick={() => {
                  setSelectedGenreId(genre.id);
                  setGenre(genre);
                }}
                {...(genre.id === selectedGenreId
                  ? { fontWeight: 'bold' }
                  : { fontWeight: 'light' })}
                textAlign='left'
                whiteSpace='normal'
                fontSize='lg'
                variant='link'>
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
