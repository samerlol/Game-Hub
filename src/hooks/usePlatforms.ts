import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import platformServices from "../services/platformServices";

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: platformServices.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: platforms
  });

export default usePlatforms;
