import useData from "./useData";

export interface Platform {
    id: string | number;
    name: string;
    slug: string;
    platforms: Platform[];
}

const usePlatforms = ()=> useData<Platform>('/platforms/lists/parents');

export default usePlatforms;