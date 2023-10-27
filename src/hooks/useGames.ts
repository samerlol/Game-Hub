import useData from "./useData";
import { Genre } from "./useGenres";
import { Platform } from "./usePlatforms";
import { GameQuery } from '../App';
// export interface Platform {
//   id: number;
//   name: string;
//   slug: string;
//   image_background: string;
// }
export interface Game {
  id: number;
  slug: string;
  name: string;
  background_image?: string;
  rating: number;
  rating_top: number;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}
const useGames = (gameQuery: GameQuery) =>
  useData<Game>("/games", { params: { genres: gameQuery.genre?.id, platforms: gameQuery.platform?.id } }, [gameQuery]);
export default useGames;
