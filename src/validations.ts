import {ZodType, z} from 'zod';
import {LoginForm, Point, Triangle} from './types';

const PointSchema: ZodType<Point> = z.object({
    x: z.string(),
    y: z.string(),
});

export const triangleFormValidationSchema: ZodType<Omit<Triangle, 'id' | 'userId'>> = z.object({
    pointA: PointSchema,
    pointB: PointSchema,
    pointC: PointSchema,
});

export const loginPageValidationSchema: ZodType<LoginForm> = z.object({
    username: z.string(),
    password: z.string(),
});
