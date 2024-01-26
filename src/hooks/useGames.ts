import { useInfiniteQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { FetchResponse } from "../services/api-client";
import { Platform } from "../services/platformServices";
import APIClient from "../services/api-client";
import { Genre } from "../services/genreServices";
import ms from 'ms';

// export interface Game {
//   id: number;
//   slug: string;
//   name: string;
//   background_image: string;
//   rating: number;
//   rating_top: number;
//   parent_platforms: { platform: Platform }[];
//   metacritic: number;
// }
export interface Game {
  id: number;
  name: string;
  slug: string;
  genres: Genre[];
  // publishers: Publisher[];
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  rating: number;
}

const apiClient = new APIClient<Game>("/games");

const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.ordering,
          search: gameQuery.search,
          page: pageParam
        }
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: ms('24h'),
    initialPageParam: 1, // Provide the initial page parameter here
  });

export default useGames;
