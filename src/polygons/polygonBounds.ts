import { Point } from "../types";
import type { IPoint } from "../interfaces";

// Calculates the bounds of a polygon.
export function polygonBounds(polygon: IPoint[]): any {
    if (polygon.length < 3) {
        return null;
    }

    let xMin: number = Infinity;
    let xMax: number = -Infinity;
    let yMin: number = Infinity;
    let yMax: number = -Infinity;
    let found: boolean = false;

    for (const p of polygon) {
        if (isFinite(p.x) && isFinite(p.y)) {
            found = true;
            if (p.x < xMin) xMin = p.x;
            if (p.x > xMax) xMax = p.x;
            if (p.y < yMin) yMin = p.y;
            if (p.y > yMax) yMax = p.y;
        }
    }

    return found ? [new Point(xMin, yMin), new Point(xMax, yMax)] : null;
}
