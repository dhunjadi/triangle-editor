export interface Point {
    x: string;
    y: string;
}

export interface Triangle {
    id: string;
    showButtons?: boolean;
    pointA: Point;
    pointB: Point;
    pointC: Point;
    userId: string;
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
