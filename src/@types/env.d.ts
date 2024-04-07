declare module '@env' {
    export const HOST: string
    export const PROJECT: "DEV" | "PROD"
    export const LOGIN_DEV: string
    export const PASSWORD_DEV: string
    export const ACCESS_TOKEN_KEY: string
    export const REFRESH_TOKEN_KEY: string
    export const REDUX_KEY: string
}