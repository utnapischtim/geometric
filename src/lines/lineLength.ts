import type { ILine, IPoint } from "../interfaces";

// Calculates the distance between the endpoints of a line segment.
export function lineLength(line: ILine): number {
    return Math.sqrt(Math.pow(line.t.x - line.s.x, 2) + Math.pow(line.t.y - line.s.y, 2));
}

export function distance(p: IPoint, q: IPoint): number {
    return Math.sqrt(Math.pow(p.x - q.x, 2) + Math.pow(p.y - q.y, 2));
}
