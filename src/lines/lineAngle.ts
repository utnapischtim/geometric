import { angleToDegrees } from "../angles/angleToDegrees";
import { Vector } from "../types";
import type { ILine, IVector, ISegment } from "../interfaces";

// Calculates the angle of a line, in degrees.
export function lineAngle(line: ILine): number {
  return angleToDegrees(Math.atan2(line.t.y - line.s.y, line.t.x - line.s.x));
}

export function segmentAngleSegment(segA: ISegment, segB: ISegment): number {
  const AB: IVector = Vector.fromSegment(segA.reverse(), true);
  const AC: IVector = Vector.fromSegment(segB, true);
  // console.log("AB: ", AB, " AC: ", AC, " dot: ", AB.dot(AC), " AB.norm: ", AB.norm(), " AC.norm: ", AC.norm());
  const angle: number = Math.acos(AB.dot(AC) / (AB.norm() * AC.norm()));

  return angleToDegrees(angle);
}
