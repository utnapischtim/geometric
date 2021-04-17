import { Line, Segment, Vector, Point } from "../types";

// Determines if lineA intersects lineB.
// See: https://stackoverflow.com/questions/9043805/test-if-two-lines-intersect-javascript-function/24392281#24392281
// Returns a boolean.
export function lineIntersectsLine(lineA: Line, lineB: Line): boolean {
    // First test to see if the lines share an endpoint
    if (sharePoint(lineA, lineB)) {
        return true;
    }

    const a = lineA.s.x,
          b = lineA.s.y,
          c = lineA.t.x,
          d = lineA.t.y,
          p = lineB.s.x,
          q = lineB.s.y,
          r = lineB.t.x,
          s = lineB.t.y,
          det,
          gamma,
          lambda;

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
    return pointA.equal(pointB);
}

function segmentIntersectsSegment(segA: Segment, segB: Segment) {
    return lineIntersectsLine(new Line(segA.s, segA.t), new Line(segB.s, segB.t));
}

export function isIntersection(segA: Segment | Line, segB: Segment | Line): boolean {
    if (segA instanceof Segment && segB instanceof Segment)
        return segmentIntersectsSegment(segA, segB);
    else if (segA instanceof Line && segB instanceof Line)
        return lineIntersectsLine(segA, segB);
    else
        console.log("not supported types in intersection");

    return false;
}

function intersectSegment(segA: Segment, segB: Segment): Point {
    const r: Vector = Vector.fromSegment(segA),
          s: Vector = Vector.fromSegment(segB);

    const p: Point = segA.s,
          q: Point = segB.s;

    let intersection: Point;

    const r_cross_s: number = r.cross(s),
          q_minus_p_cross_r: number = q.minus(p).cross(r);

    if (r_cross_s == 0 && q_minus_p_cross_r == 0) {
        throw new Error("segA and segB are collinear");
    } else if (r_cross_s == 0 && q_minus_p_cross_r != 0) {
        throw new Error("segA and segB are parallel and non-intersecting")
    } else if (r_cross_s != 0) {
        const t: number = (q.minus(p).cross(s)) / (r.cross(s)),
              u: number = (p.minus(q).cross(r)) / (s.cross(r));

        if (0 <= t && t <= 1 && 0 <= u && u <= 1) {
            intersection = q.add(s.mul(u));
        } else {
            throw new Error("segA and segB have no intersection");
        }
    } else {
        throw new Error("segA and segB are not parallel but do not intersect");
    }

    return intersection;

}

function intersectLine(lineA: Line, lineB: Line): Point | undefined {
    alert("intersectLine not yet implemented");
    return;
}

export function intersection(segA: Segment | Line, segB: Segment | Line): Point | undefined {
    if (segA instanceof Segment && segB instanceof Segment)
        return intersectSegment(segA, segB);
    else if (segA instanceof Line && segB instanceof Line)
        return intersectLine(segA, segB);
    else
        throw new Error("intersection lacks support of given type");

    return;
}
