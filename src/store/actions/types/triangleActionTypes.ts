import {Triangle} from '../../../types';
import {ADD_TRIANGLE, DELETE_TRIANGLE, EDIT_TRIANGLE} from '../triangleActions';

export interface AddTriangleAction {
    type: typeof ADD_TRIANGLE;
    triangle: Triangle;
}

export interface EditTriangleAction {
    type: typeof EDIT_TRIANGLE;
    triangle: Triangle;
}

export interface DeleteTriangleAction {
    type: typeof DELETE_TRIANGLE;
    triangleId: string;
}

export type TriangleActions = AddTriangleAction | EditTriangleAction | DeleteTriangleAction;
