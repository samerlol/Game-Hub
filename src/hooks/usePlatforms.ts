import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import platformServices from "../services/platformServices";
import Platform from "../entities/Platform";

import ms from 'ms';
import { FetchResponse } from "../services/api-client";

const usePlatforms = () =>
  useQuery<FetchResponse<Platform>, Error, FetchResponse<Platform>>({
    queryKey: ["platforms"],
    queryFn: platformServices.getAll,
    staleTime: ms('24h'),
    initialData: platforms
  });

export default usePlatforms;
