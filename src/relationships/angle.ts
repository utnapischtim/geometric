import { Segment, Vector } from "../types";
import { cross } from "../utils/crossProduct";

export function angleBisector(segA: Segment, segB: Segment): Vector {
    const AB: Vector = Vector.fromSegment(segA.reverse(), true),
          AC: Vector = Vector.fromSegment(segB, true);

    return AB.add(AC);
}

export function isReflex(segA: Segment, segB: Segment): boolean {
    return cross(segB.t, segA.s, segA.t) < 0;
}

export function isConvex(segA: Segment, segB: Segment): boolean {
    return cross(segB.t, segA.s, segA.t) > 0;
}
