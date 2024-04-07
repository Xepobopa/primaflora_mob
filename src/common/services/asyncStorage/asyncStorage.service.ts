import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';

export class AsyncStorageService {
    constructor() {
        // AsyncStorage.setItem(ACCESS_TOKEN_KEY, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTA\n' +
        //     'sInV1aWQiOiJlOGFiMmJiZi00YzA3LTQ1NTAtYjgxOS0wNjliYjI3YjA3M2UiLCJjcmVhdGVkQXQiOiIyMDI0LTA0LTAzVDAxOjE3OjUyLjgyNloiLCJ1cGRhdGVkQXQiOiIyMDI0LTA0LTAzVDAxOjE3OjUyLjgyNloiLCJuYW1lIjoiRG15dHJvIEl2YW5vdiIsImxvZ2luIjoiIzAwMDEiLCJlbWFpbCI6Iml\n' +
        //     'zbWFydHNkbjQ0NzdAZ21haWwuY29tIiwicGhvbmUiOiIrMzgwOTcyMzQyNzU4IiwiaXNfYWN0aXZhdGVkIjpmYWxzZSwicGFzc3dvcmQiOiIkMmIkMTAkbHZmSXpmZWFFVThMSmVNSWc5a3M5dTIublJyU3NkNXUvdmNQU0dReExiSjNSYmpYTHZYY0ciLCJwaG9uZV9hbGxvd2VkIjpmYWxzZSwiY29uc3VsdGF\n' +
        //     '0aW9uX2FsbG93ZWQiOmZhbHNlLCJpYXQiOjE3MTIzMTQ2MTAsImV4cCI6MTcxMjMxNTgxMH0.m8eJ7P8HyhTkcxkxhq3DfUj9HyHFw3tBBW6YiiuZZk4');
    }

    static async setAccessToken(token: string) {
        try {
            await AsyncStorage.setItem(ACCESS_TOKEN_KEY, token);
            console.log("Access token added successful!");
            console.log(token);
        } catch (e) {
            console.log(e);
        }
    }

    static async getAccessToken() {
        try {
            const token = await AsyncStorage.getItem(ACCESS_TOKEN_KEY);
            if (!token) {
                console.log('[AsyncStorage] Access token is empty');
                return;
            }

            return token;
        } catch (e) {
            console.log(e);
        }
    }

    static async deleteAccessToken() {
        try {
            await AsyncStorage.removeItem(ACCESS_TOKEN_KEY);
        } catch (e) {
            console.log(e);
        }
    }


    static async setRefreshToken(token: string) {
        try {
            await AsyncStorage.setItem(REFRESH_TOKEN_KEY, token);
            console.log("Refresh token added successful!");
        } catch (e) {
            console.log(e);
        }
    }

    static async getRefreshToken() {
        try {
            const token = await AsyncStorage.getItem(REFRESH_TOKEN_KEY);
            if (!token) {
                console.log('[AsyncStorage] Access token is empty');
                return;
            }

            return token;
        } catch (e) {
            console.log(e);
        }
    }
}