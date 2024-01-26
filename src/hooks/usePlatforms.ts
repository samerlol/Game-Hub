import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import platformServices from "../services/platformServices";
import ms from 'ms';

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: platformServices.getAll,
    staleTime: ms('24h'),
    initialData: platforms
  });

export default usePlatforms;
