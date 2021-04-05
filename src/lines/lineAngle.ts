import { angleToDegrees } from "../angles/angleToDegrees";
import { Line } from "../types";

// Calculates the angle of a line, in degrees.
export function lineAngle(line: Line): number {
    return angleToDegrees(Math.atan2(line.t.y - line.s.y, line.t.x - line.s.x));
}
