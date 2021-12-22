import { Vector } from "../types";
import { cross } from "../utils/crossProduct";
import type { ISegment, IVector } from "../interfaces";

export function angleBisector(segA: ISegment, segB: ISegment): IVector {
  const AB: IVector = Vector.fromSegment(segA.reverse(), true);
  const AC: IVector = Vector.fromSegment(segB, true);

  return AB.add(AC);
}

export function isReflex(segA: ISegment, segB: ISegment): boolean {
  // console.log("cross: ", cross(segB.t, segA.s, segA.t));
  // return cross(segB.t, segA.s, segA.t) < 0;
  const epsilon: number = -0.0000000001;
  return cross(segB.t, segA.s, segA.t) < epsilon;
}

export function isConvex(segA: ISegment, segB: ISegment): boolean {
  //return cross(segB.t, segA.s, segA.t) > 0;
  const epsilon: number = 0.0000000001;
  return cross(segB.t, segA.s, segA.t) > epsilon;
}
