import {Triangle as TriangleType} from './types';

const Triangle = ({pointA, pointB, pointC}: TriangleType) => {
    const adjustedA = {x: pointA.x + 100, y: -pointA.y + 100};
    const adjustedB = {x: pointB.x + 100, y: -pointB.y + 100};
    const adjustedC = {x: pointC.x + 100, y: -pointC.y + 100};

    const path = `M${adjustedA.x},${adjustedA.y} L${adjustedB.x},${adjustedB.y} L${adjustedC.x},${adjustedC.y} Z`;

    return (
        <svg>
            <path d={path} fill="none" stroke="black" />
        </svg>
    );
};

export default Triangle;
