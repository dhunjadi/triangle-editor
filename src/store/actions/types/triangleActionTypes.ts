import {Triangle} from '../../../types';
import {ADD_TRIANGLE} from '../triangleActions';

export interface AddTriangleAction {
    type: typeof ADD_TRIANGLE;
    triangle: Triangle;
}
