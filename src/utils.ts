import {Point, TrianglePoints} from './types';

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

export const getTrianglePerimeter = (points: TrianglePoints): number => {
    const sideA = calculateDistance(points[0], points[1]);
    const sideB = calculateDistance(points[1], points[2]);
    const sideC = calculateDistance(points[2], points[0]);
    return parseFloat((sideA + sideB + sideC).toFixed(2));
};

export const getTriangleArea = (points: TrianglePoints): number => {
    const sideA = calculateDistance(points[0], points[1]);
    const sideB = calculateDistance(points[1], points[2]);
    const sideC = calculateDistance(points[2], points[0]);
    const s = (sideA + sideB + sideC) / 2;
    return parseFloat(Math.sqrt(s * (s - sideA) * (s - sideB) * (s - sideC)).toFixed(2));
};

export const getTypeByAngles = (points: TrianglePoints): string => {
    const angles = [
        calculateAngle(points[0], points[1], points[2]),
        calculateAngle(points[1], points[2], points[0]),
        calculateAngle(points[2], points[0], points[1]),
    ].sort((x, y) => x - y);

    if (angles[2] === 90) return 'Right';
    if (angles[2] < 90) return 'Acute';
    return 'Obtuse';
};

export const getTypeBySides = (points: TrianglePoints): string => {
    const sides = [
        calculateDistance(points[0], points[1]),
        calculateDistance(points[1], points[2]),
        calculateDistance(points[2], points[0]),
    ].sort((x, y) => x - y);

    if (sides[0] === sides[2]) return 'Equilateral';
    if (sides[0] === sides[1] || sides[1] === sides[2]) return 'Isosceles';
    return 'Scalene';
};
