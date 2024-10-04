import axios, { AxiosRequestConfig } from "axios";
import { API_KEY } from "../assets/api-key";

export interface FetchResponse<T> {
    count: number
    next: string | null
    results: T[]
}

const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: API_KEY // frick off
    }
})

class APIClient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = (config: AxiosRequestConfig) => {
        return axiosInstance.get<FetchResponse<T>>(this.endpoint, config).then(res => res.data);
    }
}

export default APIClient
