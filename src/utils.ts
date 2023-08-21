import {Point, Triangle} from './types';

const calculateDistance = (p1: Point, p2: Point): number => {
    const dx = parseFloat(p1.x) - parseFloat(p2.x);
    const dy = parseFloat(p1.y) - parseFloat(p2.y);
    return Math.sqrt(dx * dx + dy * dy);
};

const calculateAngle = (p1: Point, p2: Point, p3: Point): number => {
    const a = calculateDistance(p2, p3);
    const b = calculateDistance(p1, p3);
    const c = calculateDistance(p1, p2);
    return Math.acos((a * a + b * b - c * c) / (2 * a * b)) * (180 / Math.PI);
};

export const getTrianglePerimeter = (triangle: Triangle): number => {
    const sideA = calculateDistance(triangle.pointA, triangle.pointB);
    const sideB = calculateDistance(triangle.pointB, triangle.pointC);
    const sideC = calculateDistance(triangle.pointC, triangle.pointA);
    return parseFloat((sideA + sideB + sideC).toFixed(2));
};

export const getTriangleArea = (triangle: Triangle): number => {
    const sideA = calculateDistance(triangle.pointA, triangle.pointB);
    const sideB = calculateDistance(triangle.pointB, triangle.pointC);
    const sideC = calculateDistance(triangle.pointC, triangle.pointA);
    const s = (sideA + sideB + sideC) / 2;
    return parseFloat(Math.sqrt(s * (s - sideA) * (s - sideB) * (s - sideC)).toFixed(2));
};

export const getTypeByAngles = (triangle: Triangle): string => {
    const angles = [
        calculateAngle(triangle.pointA, triangle.pointB, triangle.pointC),
        calculateAngle(triangle.pointB, triangle.pointC, triangle.pointA),
        calculateAngle(triangle.pointC, triangle.pointA, triangle.pointB),
    ].sort((x, y) => x - y);

    if (angles[2] === 90) return 'Right';
    if (angles[2] < 90) return 'Acute';
    return 'Obtuse';
};

export const getTypeBySides = (triangle: Triangle): string => {
    const sides = [
        calculateDistance(triangle.pointA, triangle.pointB),
        calculateDistance(triangle.pointB, triangle.pointC),
        calculateDistance(triangle.pointC, triangle.pointA),
    ].sort((x, y) => x - y);

    if (sides[0] === sides[2]) return 'Equilateral';
    if (sides[0] === sides[1] || sides[1] === sides[2]) return 'Isosceles';
    return 'Scalene';
};
