import { Point, Line } from "../types";

// Calculates the midpoint of a line segment.
export function lineMidpoint(line: Line): Point {
    const x: number = (line.s.x + line.t.x) / 2;
    const y: number = (line.s.y + line.t.y) / 2;
    return new Point(x, y);
}
