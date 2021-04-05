import { pointTranslate } from "../points/pointTranslate";
import { Point } from "../types";

// Translates a polygon by an angle in degrees and distance.
export function polygonTranslate(polygon: Point[], angle: number, distance: number): Point[] {
    const p: Point[] = [];

    for (let i = 0, l = polygon.length; i < l; i++) {
        p[i] = pointTranslate(polygon[i], angle, distance);
    }

    return p;
}
