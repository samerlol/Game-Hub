import platforms from "../data/platforms";

export interface Platform {
    id: string | number;
    name: string;
    slug: string;
    platforms: Platform[];
}

const usePlatforms = ()=> ({isLoading: false, error: false, data: platforms});

export default usePlatforms;