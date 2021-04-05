import { Line, Point } from "../types";

// Determines if lineA intersects lineB.
// See: https://stackoverflow.com/questions/9043805/test-if-two-lines-intersect-javascript-function/24392281#24392281
// Returns a boolean.
export function lineIntersectsLine(lineA: Line, lineB: Line): boolean {
    // First test to see if the lines share an endpoint
    if (sharePoint(lineA, lineB)) {
        return true;
    }

    let a = lineA.s.x;
    let b = lineA.s.y;
    let c = lineA.t.x;
    let d = lineA.t.y;
    let p = lineB.s.x;
    let q = lineB.s.y;
    let r = lineB.t.x;
    let s = lineB.t.y;
    let det;
    let gamma;
    let lambda;

    det = (c - a) * (s - q) - (r - p) * (d - b);
    if (det === 0) {
        return false;
    } else {
        lambda = ((s - q) * (r - a) + (p - r) * (s - b)) / det;
        gamma = ((b - d) * (r - a) + (c - a) * (s - b)) / det;
        return (0 < lambda && lambda < 1) && (0 < gamma && gamma < 1);
    }
}

export function sharePoint(lineA: Line, lineB: Line): boolean {
    return equal(lineA.s, lineB.s) || equal(lineA.s, lineB.t) || equal(lineA.t, lineB.s) || equal(lineA.t, lineB.t);
}

function equal(pointA: Point, pointB: Point) {
    return pointA.x === pointB.x && pointA.y === pointB.y;
}
