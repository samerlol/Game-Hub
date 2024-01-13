import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import platformServices from "../services/platformServices";
import { FetchResponse } from "../services/api-client";

interface Platform {
    id: number;
    slug: string;
    name: string;
}
const usePlatforms = () => useQuery<FetchResponse<Platform>, Error>({
    queryKey: ["platforms"],
    queryFn: platformServices,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: { count: platforms.length, results: platforms }
  });


export default usePlatforms;
