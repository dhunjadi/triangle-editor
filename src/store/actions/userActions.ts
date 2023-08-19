import {User} from '../../types';
import {UserLoginAction} from './types/userActionTypes';

export const USER_LOGIN = 'USER_LOGIN';

export const userLoginAction = (user: User): UserLoginAction => ({
    type: USER_LOGIN,
    user,
});
