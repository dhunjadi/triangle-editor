import {useCallback, useEffect, useRef} from 'react';
import Konva from 'konva';
import {Triangle as TriangleType} from '../types';

const Triangle = ({pointA, pointB, pointC}: TriangleType) => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    const drawTriangle = useCallback(() => {
        const stage = new Konva.Stage({
            container: containerRef.current!,
            width: 100,
            height: 100,
        });

        const layer = new Konva.Layer();
        stage.add(layer);

        const triangle = new Konva.Line({
            points: [+pointA.x, +pointA.y, +pointB.x, +pointB.y, +pointC.x, +pointC.y],
            fill: 'red',
            closed: true,
        });

        layer.add(triangle);
        stage.draw();
    }, [pointA.x, pointA.y, pointB.x, pointB.y, pointC.x, pointC.y]);

    useEffect(() => {
        if (containerRef.current) {
            drawTriangle();
        }
    }, [pointA, pointB, pointC, drawTriangle]);

    return <div className="c-triangle" ref={containerRef} />;
};

export default Triangle;
