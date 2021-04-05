import { Point } from "../types";

// Calculates the arithmetic mean of a polygon's vertices.
export function polygonMean(vertices: Point[]): Point {
    let x = 0, y = 0, l = vertices.length;

    for (let i = 0; i < l; i++) {
        const v = vertices[i];

        x += v.x;
        y += v.y;
    }

    return new Point(x / l, y / l);
}
