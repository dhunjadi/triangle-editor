import {ZodType, z} from 'zod';
import {LoginForm, Point, Triangle} from './types';

const PointSchema: ZodType<Point> = z.object({
    x: z.number(),
    y: z.number(),
});

export const triangleFormValidationSchema: ZodType<Omit<Triangle, 'id'>> = z.object({
    pointA: PointSchema,
    pointB: PointSchema,
    pointC: PointSchema,
});

export const loginPageValidationSchema: ZodType<LoginForm> = z.object({
    username: z.string(),
    password: z.string(),
});
