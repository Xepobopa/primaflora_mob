import { TRequest, TUser } from '../../types.ts';

export type TGetRefreshToken = TRequest<any, TResponse>;

type TResponse = {
    user: TUser,
    accessToken: string,
}