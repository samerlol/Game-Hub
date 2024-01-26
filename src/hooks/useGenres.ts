import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import genreServices from "../services/genreServices";

const useGenres = ()=>{
    return useQuery({
        queryKey: ['genres'],
        queryFn: genreServices.getAll,
        staleTime: 24 * 60 * 60 * 1000, //24 hours
        initialData: genres,
    })
}

export default useGenres;
