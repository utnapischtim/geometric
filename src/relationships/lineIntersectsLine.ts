import { Line /*, Vector*/, Segment, Point } from "../types";
import type { ILine, ISegment /*, IVector*/, IPoint } from "../interfaces";

// Determines if lineA intersects lineB.
// See: https://stackoverflow.com/questions/9043805/test-if-two-lines-intersect-javascript-function/24392281#24392281
// Returns a boolean.
export function lineIntersectsLine(lineA: ILine, lineB: ILine): boolean {
  // First test to see if the lines share an endpoint
  if (sharePoint(lineA, lineB)) {
    return true;
  }

  const a: number = lineA.s.x;
  const b: number = lineA.s.y;
  const c: number = lineA.t.x;
  const d: number = lineA.t.y;
  const p: number = lineB.s.x;
  const q: number = lineB.s.y;
  const r: number = lineB.t.x;
  const s: number = lineB.t.y;
  let gamma: number;
  let lambda: number;

  const det: number = (c - a) * (s - q) - (r - p) * (d - b);
  if (det === 0) {
    return false;
  } else {
    lambda = ((s - q) * (r - a) + (p - r) * (s - b)) / det;
    gamma = ((b - d) * (r - a) + (c - a) * (s - b)) / det;
    return 0 < lambda && lambda < 1 && 0 < gamma && gamma < 1;
  }
}

export function sharePoint(lineA: ILine, lineB: ILine): boolean {
  return (
    equal(lineA.s, lineB.s) ||
    equal(lineA.s, lineB.t) ||
    equal(lineA.t, lineB.s) ||
    equal(lineA.t, lineB.t)
  );
}

function equal(pointA: IPoint, pointB: IPoint) {
  return pointA.equal(pointB);
}

function segmentIntersectsSegment(segA: ISegment, segB: ISegment) {
  return lineIntersectsLine(new Line(segA.s, segA.t), new Line(segB.s, segB.t));
}

export function isIntersection(segA: ISegment | Line, segB: ISegment | Line): boolean {
  if (segA instanceof Segment && segB instanceof Segment)
    return segmentIntersectsSegment(segA, segB);
  else if (segA instanceof Line && segB instanceof Line) return lineIntersectsLine(segA, segB);
  else throw new Error("not supported types in intersection");

  return false;
}

function intersectSegment(segA: ISegment, segB: ISegment): IPoint {
  // const r: IVector = Vector.fromSegment(segA);
  // const s: IVector = Vector.fromSegment(segB);

  // const p: IPoint = segA.s;
  // const q: IPoint = segB.s;

  // let intersectionPoint: IPoint;

  // const rCrossS: number = r.cross(s);
  // const qMinusPCrossR: number = q.minus(p).cross(r);

  // if (rCrossS === 0 && qMinusPCrossR === 0) {
  //     throw new Error("segA and segB are collinear");
  // } else if (rCrossS === 0 && qMinusPCrossR !== 0) {
  //     throw new Error("segA and segB are parallel and non-intersecting")
  // } else if (rCrossS !== 0) {
  //     const t: number = (q.minus(p).cross(s)) / (r.cross(s));
  //     const u: number = (p.minus(q).cross(r)) / (s.cross(r));

  //     if (0 <= t && t <= 1 && 0 <= u && u <= 1) {
  //         intersectionPoint = q.add(s.mul(u));
  //     } else {
  //         throw new Error("segA and segB have no intersection");
  //     }
  // } else {
  //     throw new Error("segA and segB are not parallel but do not intersect");
  // }

  // return intersectionPoint;

  let intersectionPoint!: IPoint;

  const rx: number = segA.t.x - segA.s.x;
  const ry: number = segA.t.y - segA.s.y;
  const sx: number = segB.t.x - segB.s.x;
  const sy: number = segB.t.y - segB.s.y;

  const rCrossS: number = rx * sy - sx * ry;

  const px: number = segA.s.x;
  const py: number = segA.s.y;
  const qx: number = segB.s.x;
  const qy: number = segB.s.y;

  // const qMinusPCrossR: number = (qx - px) * ry - (qy - py) * rx;

  // if (rCrossS === 0 && qMinusPCrossR === 0) {
  //   //throw new Error("segA and segB are collinear");
  // } else if (rCrossS === 0 && qMinusPCrossR !== 0) {
  //   //throw new Error("segA and segB are parallel and non-intersecting")
  // } else
  if (rCrossS !== 0) {
    const t: number = ((qx - px) * sy - (qy - py) * sx) / (rx * sy - ry * sx);
    const u: number = ((px - qx) * ry - (py - qy) * rx) / (sx * ry - sy * rx);

    if (0 <= t && t <= 1 && 0 <= u && u <= 1) {
      intersectionPoint = new Point(qx + sx * u, qy + sy * u);
    } // else {
    //   //throw new Error("segA and segB have no intersection");
    // }
  } //  else {
  //   //throw new Error("segA and segB are not parallel but do not intersect");
  // }

  return intersectionPoint;
}

// function intersectLine(lineA: Line, lineB: Line): Point | undefined {
//     alert("intersectLine not yet implemented");
//     return;
// }

export function intersection(segA: ISegment | ILine, segB: ISegment | ILine): IPoint | undefined {
  if (segA instanceof Segment && segB instanceof Segment) {
    return intersectSegment(segA, segB);
  } else if (segA instanceof Line && segB instanceof Line) {
    //     return intersectLine(segA, segB);
  } else {
    throw new Error("intersection lacks support of given type");
  }

  return;
}
