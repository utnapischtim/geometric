import { pointTranslate } from "../points/pointTranslate";
import type { IPoint } from "../interfaces";

// Translates a polygon by an angle in degrees and distance.
export function polygonTranslate(polygon: IPoint[], angle: number, distance: number): IPoint[] {
    const p: IPoint[] = [];

    for (let i = 0, l = polygon.length; i < l; i++) {
        p[i] = pointTranslate(polygon[i], angle, distance);
    }

    return p;
}
