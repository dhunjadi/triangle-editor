import {useEffect, useRef} from 'react';
import Konva from 'konva';
import {Point} from '../types';

interface KonvaTriangleProps {
    points: Point[];
}

const KonvaTriangle = ({points}: KonvaTriangleProps) => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const stage = new Konva.Stage({
            container: containerRef.current!,
            width: 100,
            height: 100,
        });

        const layer = new Konva.Layer();
        stage.add(layer);

        const triangle = new Konva.Line({
            points: [+points[0].x, +points[0].y, +points[1].x, +points[1].y, +points[2].x, +points[2].y],
            fill: '#1782c5',
            closed: true,
        });

        layer.add(triangle);
        stage.draw();
    }, [points]);

    return <div className="c-konvaTriangle" ref={containerRef} />;
};

export default KonvaTriangle;
