import { cross } from "../utils/crossProduct";
import type { IPoint } from "../interfaces";

// Caclulates the convex hull of a set of points.
// See https://en.wikibooks.org/wiki/Algorithm_Implementation/Geometry/Convex_hull/Monotone_chain#JavaScript
export function polygonHull(points: IPoint[]): any {
    if (points.length < 3) {
        return null;
    }

    const pointsCopy: IPoint[] = points.slice().sort((a, b) => a.x === b.x ? a.y - b.y : a.x - b.x);

    const lower: IPoint[] = [];
    for (const point of pointsCopy) {
        while (lower.length >= 2 && cross(lower[lower.length - 2], lower[lower.length - 1], point) <= 0) {
            lower.pop();
        }
        lower.push(point);
    }

    const upper: IPoint[] = [];
    for (let i = pointsCopy.length - 1; i >= 0; i--) {
        while (upper.length >= 2 && cross(upper[upper.length - 2], upper[upper.length - 1], pointsCopy[i]) <= 0) {
            upper.pop();
        }
        upper.push(pointsCopy[i]);
    }

    upper.pop();
    lower.pop();

    return lower.concat(upper);
}
