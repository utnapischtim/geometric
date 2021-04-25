import type { IPoint } from "../interfaces";

// Closes a polygon if it's not closed already. Does not modify input polygon.
export function close(polygon: IPoint[]): IPoint[] {
    return isClosed(polygon) ? polygon : [...polygon, polygon[0]];
}

// Tests whether a polygon is closed
export function isClosed(polygon: IPoint[]): boolean {
    const first: IPoint = polygon[0];
    const last: IPoint = polygon[polygon.length - 1];

    return first.equal(last);
}
