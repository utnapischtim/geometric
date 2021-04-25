import { Point } from "../types";
import type { IPoint } from "../interfaces";

// Calculates the arithmetic mean of a polygon's vertices.
export function polygonMean(vertices: IPoint[]): IPoint {
    let x: number = 0;
    let y: number = 0;
    const size: number = vertices.length;

    for (const v of vertices) {
        x += v.x;
        y += v.y;
    }

    return new Point(x / size, y / size);
}
