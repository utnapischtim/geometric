import { Point } from "../types";
import type { IPoint } from "../interfaces";

// Calculates the weighted centroid a polygon.
export function polygonCentroid(vertices: IPoint[]): Point {
    let a: number = 0;
    let x: number = 0;
    let y: number = 0;
    const size: number = vertices.length

    for (let i = 0; i < size; i++) {
        const s: number = i === size - 1 ? 0 : i + 1;
        const v0: IPoint = vertices[i];
        const v1: IPoint = vertices[s];
        const f: number = (v0.x * v1.y) - (v1.x * v0.y);

        a += f;
        x += (v0.x + v1.x) * f;
        y += (v0.y + v1.y) * f;
    }

    const d = a * 3;

    return new Point(x / d, y / d);
}
