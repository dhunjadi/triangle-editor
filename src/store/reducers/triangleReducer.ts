import {Triangle} from '../../types';
import {ADD_TRIANGLE, TriangleActions} from '../actions/triangleActions';

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
        default:
            return state;
    }
};
