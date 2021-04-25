import type { IPoint } from "../interfaces";

// Calculates the area of a polygon.
export function polygonArea(vertices: IPoint[], signed: boolean = false): number {
    let a: number = 0;
    const size: number = vertices.length;

    for (let i = 0; i < size; i++) {
        const v0: IPoint = vertices[i];
        const v1: IPoint = vertices[i === size - 1 ? 0 : i + 1];

        a += v0.x * v1.y;
        a -= v1.x * v0.y;
    }

    return signed ? a / 2 : Math.abs(a / 2);
}
