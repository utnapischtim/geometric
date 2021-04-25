import { Point } from "../types";
import type { ILine, IPoint } from "../interfaces";

// Calculates the midpoint of a line segment.
export function lineMidpoint(line: ILine): IPoint {
    const x: number = (line.s.x + line.t.x) / 2;
    const y: number = (line.s.y + line.t.y) / 2;
    return new Point(x, y);
}
