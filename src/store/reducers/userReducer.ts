import {User} from '../../types';
import {UserActions} from '../actions/types/userActionTypes';
import {USER_LOGIN} from '../actions/userActions';

export interface UserReducerState {
    loggedinUser: User | undefined;
}

const initialState = {
    loggedinUser: undefined,
};

export const userReducer = (state: UserReducerState = initialState, action: UserActions): UserReducerState => {
    switch (action.type) {
        case USER_LOGIN:
            return {
                ...state,
                loggedinUser: action.user,
            };
        default:
            return state;
    }
};
