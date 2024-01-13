import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import platformServices, { Platform } from "../services/platformServices";
import { FetchResponse } from "../services/api-client";

const usePlatforms = () =>
  useQuery<FetchResponse<Platform>>({
    queryKey: ["platforms"],
    queryFn: platformServices.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: { count: platforms.length, results: platforms }
  });

export default usePlatforms;
