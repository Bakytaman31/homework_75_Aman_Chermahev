import axios from 'axios';

export const axiosApp = axios.create({
    baseURL: 'http://localhost:8001/'
});