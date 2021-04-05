import { close } from "../utils/closePolygon";
import { lineIntersectsLine } from "./lineIntersectsLine";
import { pointOnLine } from "../relationships/pointOnLine";
import { Point, Line } from "../types";

// Determines whether a line intersects a polygon.
// Returns a boolean.
export function lineIntersectsPolygon(line: Line, polygon: Point[]): boolean {
    let intersects = false;
    const closed = close(polygon);

    for (let i = 0, l = closed.length - 1; i < l; i++) {
        const v0 = closed[i];
        const v1 = closed[i + 1];

        if (lineIntersectsLine(line, new Line(v0, v1)) || (pointOnLine(v0, line) && pointOnLine(v1, line))) {
            intersects = true;
            break;
        }
    }

    return intersects;
}
