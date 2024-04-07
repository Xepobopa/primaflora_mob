import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { TUser } from '../../services';
import { userSliceActions } from '../../../store/modules/user/reducer.ts';

export const useAuth = () => {
    const dispatch = useDispatch();

    const setUserData = useCallback(
        (user: TUser) => {
            dispatch(userSliceActions.setUser(user));
        },
        [dispatch],
    );

    return { setUserData };
};