import {User} from '../../../types';
import {USER_LOGIN} from '../userActions';

export interface UserLoginAction {
    type: typeof USER_LOGIN;
    user: User;
}

export type UserActions = UserLoginAction;
