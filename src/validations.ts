import {ZodType, z} from 'zod';
import {Point, Triangle} from './types';

const PointSchema: ZodType<Point> = z.object({
    x: z.number(),
    y: z.number(),
});

export const triangleFormValidationSchema: ZodType<Omit<Triangle, 'id'>> = z.object({
    id: z.string(),
    pointA: PointSchema,
    pointB: PointSchema,
    pointC: PointSchema,
});
