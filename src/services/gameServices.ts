import { Game } from "../hooks/useGames";
import APIClient, { FetchResponse } from "./api-client";

const apiClient = new APIClient<Game>('/games');

interface GameParams{
    genres: string | number | undefined;
    parent_platforms: string | number | undefined,
    ordering: string | null,
    search: string | undefined,
}

// const gameServices = (gameParams: GameParams)=> apiClient.get<FetchResponse<Game>>('/games', {params:{...gameParams}}).then(res=> res.data);
const gameServices = (gameParams: GameParams)=> apiClient.getAll({params:{...gameParams}}).then(res=> res.data);

export default gameServices;