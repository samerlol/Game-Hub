import genres from "../data/genres";

export interface Genre {
    id: number;
    name: string;
    slug: string;
    image_background: string;
}

const useGenres = () => ({isLoading: false, error: false, data: genres});

export default useGenres;
