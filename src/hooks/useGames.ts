import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import gameServices from "../services/gameServices";
import { Platform } from "../services/platformServices";

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
const useGames = (gameQuery: GameQuery)=>useQuery({
  queryKey: ['games', gameQuery],
  queryFn: ()=>  gameServices({
    genres: gameQuery.genre?.id,
    platforms: gameQuery.platform?.id,
    ordering: gameQuery.ordering,
    search: gameQuery.search,
  }),
  staleTime: 24 * 60 * 60 * 1000, // 24 hours
})

export default useGames;
