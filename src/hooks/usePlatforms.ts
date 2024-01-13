import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import platformServices from "../services/platformServices";


const usePlatforms = ()=> {
    return useQuery({
        queryKey: ['platforms'],
        queryFn: ()=> platformServices,
        staleTime: 24 * 60 * 60 * 1000, // 24 hours
        initialData: {count: platforms.length, results: platforms},
    })
};

export default usePlatforms;