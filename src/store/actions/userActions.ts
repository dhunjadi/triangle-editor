import {User} from '../../types';
import {UserLoginAction, UserLogoutAction} from './types/userActionTypes';

export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';

export const userLoginAction = (user: User): UserLoginAction => ({
    type: USER_LOGIN,
    user,
});

export const userLogoutAction = (): UserLogoutAction => ({
    type: USER_LOGOUT,
});
