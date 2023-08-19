import {combineReducers} from 'redux';
import {triangleReducer, TriangleReducerState} from './triangleReducer';

export interface StoreState {
    triangleReducer: TriangleReducerState;
}

export const rootReducer = combineReducers({
    triangleReducer,
});
