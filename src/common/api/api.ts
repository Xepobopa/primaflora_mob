import axios from 'axios';
import { AsyncStorageService } from '../services/asyncStorage/asyncStorage.service.ts';
import { Service } from '../services';

// 10.0.2.2 - for Android   localhost - default
const privateInstance = axios.create({
    baseURL: 'http://10.0.2.2:5000', // 'http://localhost:5000'
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
    },
});

const publicInstance = axios.create({
    baseURL: 'http://10.0.2.2:5000',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
    },
});

privateInstance.interceptors.request.use(
    async config => {
        const accessToken = await AsyncStorageService.getAccessToken();
        const refreshToken = await AsyncStorageService.getRefreshToken();

        if (accessToken && config.headers) {
            config.headers.Authorization = 'Bearer ' + accessToken;
        }
        config.headers['Cookie'] = `refreshToken=${refreshToken}`;

        return config;
    },
    error => Promise.reject(error),
);

privateInstance.interceptors.response.use(
    (value) => value,
    async error => {
        if (axios.isAxiosError(error)) {
            if (error.request.status === 404 || error.request.status === 401) {
                // access token is old. We need to get a new one and set it
                try {
                    // set new token
                    const res = await Service.AuthService.refreshToken();
                    await AsyncStorageService.setAccessToken(res.data.accessToken);

                    // resend old request and return it
                    const config = { ...error.config, headers: { Authorization: `Bearer ${res.data.accessToken}` } };
                    return await privateInstance(config);

                } catch (e) {
                    console.error('Token refresh failed:', e);
                    Promise.reject('Token refresh failed. Log out from your account and sign in.');
                }
            }

        }
        Promise.reject(error);
    },
);

export const apiPublic = publicInstance;
export const apiPrivate = privateInstance;