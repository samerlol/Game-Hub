import { useQuery } from "@tanstack/react-query";
import { Trailer } from "../entities/Trailer";
import APIClient from "../services/api-client";
import { FetchResponse } from '../services/api-client';


const useGameTrailer = (slug: string)=>{
    const apiClient = new APIClient<FetchResponse<Trailer>>(`/games/${slug}/movies`);
    return useQuery<FetchResponse<Trailer>>({
        queryKey: ['GameTrailer',slug],
        queryFn: apiClient.getAll,
        
    })
}

export default useGameTrailer;