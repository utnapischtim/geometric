import { Point } from "../types";

// Calculates the weighted centroid a polygon.
export function polygonCentroid(vertices: Point[]): Point {
    let a: number = 0;
    let x: number = 0;
    let y: number = 0;
    let l: number = vertices.length;

    for (let i = 0; i < l; i++) {
        const s = i === l - 1 ? 0 : i + 1,
        v0 = vertices[i],
        v1 = vertices[s],
        f = (v0.x * v1.y) - (v1.x * v0.y);

        a += f;
        x += (v0.x + v1.x) * f;
        y += (v0.y + v1.y) * f;
    }

    const d = a * 3;

    return new Point(x / d, y / d);
}
