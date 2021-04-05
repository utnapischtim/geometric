import { Point } from "../types";

// Calculates the area of a polygon.
export function polygonArea(vertices: Point[], signed: boolean = false): number {
    let a: number = 0;

    for (let i = 0, l = vertices.length; i < l; i++) {
        const v0 = vertices[i],
        v1 = vertices[i === l - 1 ? 0 : i + 1];

        a += v0.x * v1.y;
        a -= v1.x * v0.y;
    }

    return signed ? a / 2 : Math.abs(a / 2);
}
