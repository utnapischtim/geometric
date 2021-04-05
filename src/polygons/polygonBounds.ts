import { Point } from "../types";

// Calculates the bounds of a polygon.
export function polygonBounds(polygon: Point[]): any {
    if (polygon.length < 3) {
        return null;
    }

    let xMin: number = Infinity,
        xMax: number = -Infinity,
        yMin: number = Infinity,
        yMax: number = -Infinity,
        found: boolean = false;

    for (let i = 0, l = polygon.length; i < l; i++) {
        const p = polygon[i];

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
