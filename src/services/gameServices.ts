import { FetchResponse } from "../hooks/useData";
import { Game } from "../hooks/useGames";
import apiClient from "./api-client";
// import { GameQuery } from "../App";

interface GameParams{
    genres: string | number | undefined;
    parent_platforms: string | number | undefined,
    ordering: string | null,
    search: string | undefined,
}

const gameServices = (gameParams: GameParams)=> apiClient.get<FetchResponse<Game>>('/games', {params:{...gameParams}}).then(res=> res.data);

export default gameServices;