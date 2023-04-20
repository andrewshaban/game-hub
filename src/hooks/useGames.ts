import { GameQuery } from '../App';
import useData from './useData';
import { Genre } from './useGenres';
import { Platform } from './usePlatforms';

export interface PlatformForGameQuery {
  platform: Platform;
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
  parent_platforms: PlatformForGameQuery[];
}

const useGames = (gameQuery: GameQuery) => {
  return useData<Game>('/games', {
    params: {
      genres: gameQuery.genre?.id,
      parent_platforms: gameQuery.platform?.id,
      ordering: gameQuery.sortOrder,
      search: gameQuery.searchText,
    },
  });
};

export default useGames;
