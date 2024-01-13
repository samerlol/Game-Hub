import { Game } from "../hooks/useGames";
import apiClient, { FetchResponse } from "./api-client";

interface GameParams{
    genres: string | number | undefined;
    parent_platforms: string | number | undefined,
    ordering: string | null,
    search: string | undefined,
}

const gameServices = (gameParams: GameParams)=> apiClient.get<FetchResponse<Game>>('/games', {params:{...gameParams}}).then(res=> res.data);

export default gameServices;