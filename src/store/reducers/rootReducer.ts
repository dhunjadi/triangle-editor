import {combineReducers} from 'redux';
import {triangleReducer, TriangleReducerState} from './triangleReducer';
import {userReducer, UserReducerState} from './userReducer';

export interface StoreState {
    triangleReducer: TriangleReducerState;
    userReducer: UserReducerState;
}

export const rootReducer = combineReducers({
    triangleReducer,
    userReducer,
});
