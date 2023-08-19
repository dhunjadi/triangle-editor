export interface Point {
    x: string;
    y: string;
}

export interface Triangle {
    id: string;
    pointA: Point;
    pointB: Point;
    pointC: Point;
}

export interface User {
    id: string;
    username: string;
    password: string;
}

export interface LoginForm {
    username: string;
    password: string;
}
