import type { IPoint } from "../interfaces";

// Determines whether a point is inside of a polygon, represented as an array of vertices.
// From https://github.com/substack/point-in-polygon/blob/master/index.js,
// based on the ray-casting algorithm from https://web.archive.org/web/20180115151705/https://wrf.ecse.rpi.edu//Research/Short_Notes/pnpoly.html
// Wikipedia: https://en.wikipedia.org/wiki/Point_in_polygon#Ray_casting_algorithm
// Returns a boolean.
export function pointInPolygon(point: IPoint, polygon: IPoint[]): boolean {
    const x: number = point.x;
    const y: number = point.y;
    let inside = false;

    for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
        const xi: number = polygon[i].x;
        const yi: number = polygon[i].y;
        const xj: number = polygon[j].x;
        const yj: number = polygon[j].y;

        if (((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi)) {
            inside = !inside;
        }
    }

    return inside;
}
