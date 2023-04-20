import useData from './useData';
import { Genre } from './useGenres';

export interface Platform {
  platform: {
    id: number;
    name: string;
    slug: string;
  };
}

export interface Game {
  id: number;
  slug: string;
  name: string;
  released: Date;
  tba: boolean;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings: {};
  ratings_count: number;
  reviews_text_count: string;
  added: number;
  added_by_status: {};
  metacritic: number;
  playtime: number;
  suggestions_count: number;
  updated: Date;
  genres: Genre[];
  esrb_rating: {
    id: number;
    slug: string;
    name: string;
  };
  parent_platforms: Platform[];
}

const useGames = (genreId: number) => {
  if (genreId === 0) {
    return useData<Game>('/games');
  } else {
    return useData<Game>('/games', { params: { genres: genreId } });
  }
};

export default useGames;
