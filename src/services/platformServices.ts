import APIClient from "./api-client";
export interface Platform {
    id: number;
    name: string;
    slug: string;
    // platforms: Platform[];
}
const apiClient = new APIClient<Platform>('/platforms/lists/parents');

export default apiClient;