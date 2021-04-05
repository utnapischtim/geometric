import { Point } from "../types";

// Calculates the length of a polygon's perimeter. See https://github.com/d3/d3-polygon/blob/master/src/length.js
export function polygonLength(vertices: Point[]) {
    if (vertices.length === 0) {
        return 0;
    }

    let i = -1;
    let n = vertices.length;
    let b = vertices[n - 1];
    let xa;
    let ya;
    let xb = b.x;
    let yb = b.y;
    let perimeter = 0;

    while (++i < n) {
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
