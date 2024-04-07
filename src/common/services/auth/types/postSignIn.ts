import { TRequest, TUser } from '../../types.ts';

export type TPostUserSignInRequest = TRequest<TPayload, TResponse>

type TPayload = {
    login: string;
    password: string;
}

type TResponse = {
    user: TUser,
    accessToken: string,
    refreshToken: string,
}