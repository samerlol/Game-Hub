import { AxiosResponse } from "axios";
import { FetchResponse } from "../hooks/useData";
import apiClient from "./api-client";

export interface Platform {
    id: string | number;
    name: string;
    slug: string;
    platforms: Platform[];
}
const platformServices = apiClient.get<FetchResponse<Platform>, AxiosResponse>('/platforms/lists/parents').then(res => res.data);
export default platformServices;