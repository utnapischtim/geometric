import { close } from "../utils/closePolygon";
import { pointOnLine } from "./pointOnLine";
import { Line } from "../types";
import type { IPoint } from "../interfaces";

// Determines whether a point is located on one of the edges of a polygon.
// Returns a boolean.
export function pointOnPolygon(point: IPoint, polygon: IPoint[], epsilon: number = 0): boolean {
    let on = false;
    const closed = close(polygon);

    for (let i = 0, l = closed.length - 1; i < l; i++) {
        if (pointOnLine(point, new Line(closed[i], closed[i + 1]), epsilon)) {
            on = true;
            break;
        }
    }

    return on;
}
