import { Point } from "../types";

// Closes a polygon if it's not closed already. Does not modify input polygon.
export function close(polygon: Point[]) {
    return isClosed(polygon) ? polygon : [...polygon, polygon[0]];
}

// Tests whether a polygon is closed
export function isClosed(polygon: Point[]): boolean {
    const first = polygon[0];
    const last = polygon[polygon.length - 1];
    return first.x === last.x && first.y === last.y;
}
