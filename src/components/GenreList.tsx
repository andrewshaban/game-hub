import {
  Button,
  HStack,
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
  setGenreId: (id: number) => void;
};

const GenreList = ({ setGenreId }: Props) => {
  const { data, isLoading } = useGenres();
  const [selectedGenreId, setSelectedGenreId] = useState(0);
  if (isLoading) return <Spinner />;
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={1}>
          <HStack>
            <Image
              boxSize={9}
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button
              onClick={() => {
                setSelectedGenreId(genre.id);
                setGenreId(genre.id);
              }}
              {...(genre.id === selectedGenreId
                ? { fontWeight: 'bold' }
                : { fontWeight: 'light' })}
              fontSize='lg'
              variant='link'>
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
