import { pointRotate } from "../points/pointRotate";
import type { IPoint } from "../interfaces";

// Rotates a polygon by an angle in degrees around an origin.
export function polygonRotate(polygon: IPoint[], angle: number, origin: IPoint): IPoint[] {
    return polygon.map(p => pointRotate(p, angle, origin));
}
