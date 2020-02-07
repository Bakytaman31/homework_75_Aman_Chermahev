import axios from 'axios';

export const axiosApp = axios.create({
    baseURL: 'https://localhost:8000/'
});