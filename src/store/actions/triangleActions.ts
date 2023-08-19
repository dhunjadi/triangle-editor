import {Triangle} from '../../types';
import {AddTriangleAction} from './types/triangleActionTypes';

export const ADD_TRIANGLE = 'ADD_TRIANGLE';

export const addTriangleAction = (triangle: Triangle): AddTriangleAction => ({
    type: ADD_TRIANGLE,
    triangle,
});

export type TriangleActions = AddTriangleAction;
