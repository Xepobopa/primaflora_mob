import { apiPrivate } from '../../api';
import { TPostUserSignUpRequest } from './types/postSignUp.ts';
import { TPostUserSignInRequest } from './types/postSignIn.ts';
import { TGetRefreshToken } from './types/getRefreshToken.ts';

export class AuthService {
    static async postSignUp(data: TPostUserSignUpRequest['payload']): Promise<TPostUserSignUpRequest['response']> {
        return apiPrivate.post('/authorization/sign-up', data)
    }

    static async postSignIn(data: TPostUserSignInRequest['payload']): Promise<TPostUserSignInRequest['response']> {
        return apiPrivate.post('/authorization/sign-in', data);
    }

    static async refreshToken(): Promise<TGetRefreshToken['response']> {
        return apiPrivate.post('/authorization/refreshToken');
    }

    static async postLogOut() {
        return apiPrivate.post('/authorization/sign-in');
    }
}