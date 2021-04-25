import type { IPoint } from "../interfaces";

// Calculates the length of a polygon's perimeter. See https://github.com/d3/d3-polygon/blob/master/src/length.js
export function polygonLength(vertices: IPoint[]) {
    if (vertices.length === 0) {
        return 0;
    }

    const size: number = vertices.length;

    let i: number = -1;
    let b: IPoint = vertices[size - 1];
    let xa: number;
    let ya: number;
    let xb: number = b.x;
    let yb: number = b.y;
    let perimeter: number = 0;

    while (++i < size) {
        xa = xb;
        ya = yb;
        b = vertices[i];
        xb = b.x;
        yb = b.y;
        xa -= xb;
        ya -= yb;
        perimeter += Math.sqrt(xa * xa + ya * ya);
    }

    return perimeter;
}
