import {Triangle} from '../../types';
import {ADD_TRIANGLE, DELETE_TRIANGLE, EDIT_TRIANGLE} from '../actions/triangleActions';
import {TriangleActions} from '../actions/types/triangleActionTypes';

export interface TriangleReducerState {
    triangleList: Triangle[];
}

const initialState = {
    triangleList: [],
};

export const triangleReducer = (state: TriangleReducerState = initialState, action: TriangleActions): TriangleReducerState => {
    switch (action.type) {
        case ADD_TRIANGLE:
            return {
                ...state,
                triangleList: [...state.triangleList, action.triangle],
            };
        case EDIT_TRIANGLE:
            return {
                ...state,
                triangleList: [...state.triangleList.map((triangle) => (triangle.id === action.triangle.id ? action.triangle : triangle))],
            };
        case DELETE_TRIANGLE:
            return {
                ...state,
                triangleList: [...state.triangleList.filter((triangle) => triangle.id !== action.triangleId)],
            };
        default:
            return state;
    }
};
