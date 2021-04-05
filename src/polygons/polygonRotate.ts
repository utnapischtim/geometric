import { pointRotate } from "../points/pointRotate";
import { Point } from "../types";

// Rotates a polygon by an angle in degrees around an origin.
export function polygonRotate(polygon: Point[], angle: number, origin: Point): Point[] {
    let p: Point[] = [];

    for (let i = 0, l = polygon.length; i < l; i++) {
        p[i] = pointRotate(polygon[i], angle, origin);
    }

    return p;
}
