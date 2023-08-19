import {Triangle} from '../../types';
import {AddTriangleAction, EditTriangleAction} from './types/triangleActionTypes';

export const ADD_TRIANGLE = 'ADD_TRIANGLE';
export const EDIT_TRIANGLE = 'EDIT_TRIANGLE';

export const addTriangleAction = (triangle: Triangle): AddTriangleAction => ({
    type: ADD_TRIANGLE,
    triangle,
});

export const editTriangleAction = (triangle: Triangle): EditTriangleAction => ({
    type: EDIT_TRIANGLE,
    triangle,
});
