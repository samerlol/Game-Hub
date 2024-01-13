import { AxiosResponse } from "axios";
import apiClient, { FetchResponse } from "./api-client";

export interface Platform {
    id: string | number;
    name: string;
    slug: string;
    // platforms: Platform[];
}
const platformServices = () => apiClient.get<FetchResponse<Platform>, AxiosResponse>('/platforms/lists/parents').then(res => res.data);

export default platformServices;