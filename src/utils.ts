import {Point, TrianglePoints} from './types';

const calculateDistance = (p1: Point, p2: Point): number => {
    const dx = parseFloat(p1.x) - parseFloat(p2.x);
    const dy = parseFloat(p1.y) - parseFloat(p2.y);
    return Math.sqrt(dx * dx + dy * dy);
};

export const getTrianglePerimeter = (points: TrianglePoints): number => {
    const [pointA, pointB, pointC] = points;

    const sideAB = calculateDistance(pointA, pointB);
    const sideBC = calculateDistance(pointB, pointC);
    const sideCA = calculateDistance(pointC, pointA);

    const perimeter = parseFloat((sideAB + sideBC + sideCA).toFixed(2));

    return perimeter;
};

export const getTriangleArea = (points: TrianglePoints): number => {
    const [pointA, pointB, pointC] = points;

    const sideAB = calculateDistance(pointA, pointB);
    const sideBC = calculateDistance(pointB, pointC);
    const sideCA = calculateDistance(pointC, pointA);

    const semiPerimeter = (sideAB + sideBC + sideCA) / 2;
    const area = parseFloat(
        Math.sqrt(semiPerimeter * (semiPerimeter - sideAB) * (semiPerimeter - sideBC) * (semiPerimeter - sideCA)).toFixed(2)
    );

    return area;
};

export const getTypeByAngles = (points: TrianglePoints): string => {
    const [pointA, pointB, pointC] = points;

    const sideAB = calculateDistance(pointA, pointB);
    const sideBC = calculateDistance(pointB, pointC);
    const sideCA = calculateDistance(pointC, pointA);

    const angles = [
        Math.acos((sideBC * sideBC + sideCA * sideCA - sideAB * sideAB) / (2 * sideBC * sideCA)),
        Math.acos((sideCA * sideCA + sideAB * sideAB - sideBC * sideBC) / (2 * sideCA * sideAB)),
        Math.acos((sideAB * sideAB + sideBC * sideBC - sideCA * sideCA) / (2 * sideAB * sideBC)),
    ];

    const degrees = angles.map((angle) => angle * (180 / Math.PI));

    if (degrees.some((angle) => angle === 90)) return 'Right';
    if (degrees.every((angle) => angle < 90)) return 'Acute';
    return 'Obtuse';
};

export const getTypeBySides = (points: TrianglePoints): string => {
    const [pointA, pointB, pointC] = points;

    const sideAB = calculateDistance(pointA, pointB);
    const sideBC = calculateDistance(pointB, pointC);
    const sideCA = calculateDistance(pointC, pointA);

    if (sideAB === sideBC && sideBC === sideCA) return 'Equilateral';
    if (sideAB === sideBC || sideBC === sideCA || sideCA === sideAB) return 'Isosceles';
    return 'Scalene';
};
