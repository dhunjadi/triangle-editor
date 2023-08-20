import {useCallback, useEffect, useRef} from 'react';
import Konva from 'konva';
import {Triangle as TriangleType} from '../types';
import Button from './Button';
import {useNavigate} from 'react-router-dom';

const Triangle = ({id, pointA, pointB, pointC, showButtons}: TriangleType) => {
    const navigate = useNavigate();
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
            fill: '#1782c5',
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

    return (
        <div className="c-triangle">
            <div className="c-triangle__body" ref={containerRef} />
            {showButtons && (
                <div className="c-triangle__buttons">
                    <Button onClick={() => navigate(`edit/${id}`)}>Edit</Button>
                    <Button danger>Delete</Button>
                </div>
            )}
        </div>
    );
};

export default Triangle;
