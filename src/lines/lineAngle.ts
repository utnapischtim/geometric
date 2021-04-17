import { angleToDegrees } from "../angles/angleToDegrees";
import { Line, Vector, Segment } from "../types";

// Calculates the angle of a line, in degrees.
export function lineAngle(line: Line): number {
    return angleToDegrees(Math.atan2(line.t.y - line.s.y, line.t.x - line.s.x));
}

export function segmentAngleSegment(segA: Segment, segB: Segment): number {
    const AB: Vector = Vector.fromSegment(segA.reverse(), true),
          AC: Vector = Vector.fromSegment(segB, true);

    const angle: number = Math.acos(AB.dot(AC) / (AB.norm() * AC.norm()));

    return angleToDegrees(angle);
}
