import apiClient, { FetchResponse } from "./api-client";

export interface Genre {
    id: number;
    name: string;
    slug: string;
    image_background: string;
}

export default apiClient.get<FetchResponse<Genre>>('/genres').then(res=> res.data);
