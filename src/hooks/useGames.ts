import useData from "./useData";
import { Platform } from "./usePlatforms";
import { GameQuery } from '../App';

export interface Game {
  id: number;
  slug: string;
  name: string;
  background_image: string;
  rating: number;
  rating_top: number;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}
const useGames = (gameQuery: GameQuery) =>
  useData<Game>("/games", { params: { genres: gameQuery.genre?.id, platforms: gameQuery.platform?.id, ordering: gameQuery.ordering } }, [gameQuery]);
export default useGames;
