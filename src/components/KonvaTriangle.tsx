import {useEffect, useRef} from 'react';
import Konva from 'konva';
import {Point} from '../types';

interface KonvaTriangleProps {
    points: Point[];
}

const KonvaTriangle = ({points}: KonvaTriangleProps) => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (containerRef.current) {
            const containerWidth = containerRef.current.offsetWidth;
            const containerHeight = containerRef.current.offsetHeight;

            const stage = new Konva.Stage({
                container: containerRef.current,
                width: 100,
                height: 100,
            });

            const layer = new Konva.Layer();
            stage.add(layer);

            // Calculate the center of the canvas
            const centerX = containerWidth / 2;
            const centerY = containerHeight / 2;

            // Calculate a scaling factor to fit the triangle within the canvas
            const maxDistance = Math.max(
                ...points.map((point) => {
                    const x = parseFloat(point.x);
                    const y = parseFloat(point.y);
                    return Math.sqrt(x * x + y * y); // Calculate Euclidean distance from (0, 0)
                })
            );

            const scaleFactor = Math.min(centerX, centerY) / maxDistance;

            const scaledPoints = points.map((point) => ({
                x: centerX + parseFloat(point.x) * scaleFactor,
                y: centerY - parseFloat(point.y) * scaleFactor, // Reverse the y-axis for canvas
            }));

            const triangle = new Konva.Line({
                points: scaledPoints.flatMap((point) => [point.x, point.y]),
                fill: '#264284',
                closed: true,
            });

            layer.add(triangle);
            stage.draw();
        }
    }, [points]);

    return <div className="c-konvaTriangle" ref={containerRef} />;
};

export default KonvaTriangle;
