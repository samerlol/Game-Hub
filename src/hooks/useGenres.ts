import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genres from "../data/genres";
import { Genre } from "../entities/Genre";
import genreServices from "../services/genreServices";

import { FetchResponse } from "../services/api-client";

const useGenres = ()=>{
    return useQuery<FetchResponse<Genre>, Error, FetchResponse<Genre>>({
        queryKey: ['genres'],
        queryFn: genreServices.getAll,
        staleTime: ms('24h'),
        initialData: genres,
    })
}

export default useGenres;
