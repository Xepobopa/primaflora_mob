import { TRequest, TUser } from '../../types.ts';

export type TPostUserSignUpRequest = TRequest<TPayload, TUser>

type TPayload = {
    name: string;
    phone: string;
    email: string;
    login: string;
    password1: string;
    password2: string;
    phone_allowed: boolean;
    consultation_allowed: boolean;
}