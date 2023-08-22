import {User} from '../../../types';
import {USER_LOGIN, USER_LOGOUT} from '../userActions';

export interface UserLoginAction {
    type: typeof USER_LOGIN;
    user: User;
}

export interface UserLogoutAction {
    type: typeof USER_LOGOUT;
}

export type UserActions = UserLoginAction | UserLogoutAction;
