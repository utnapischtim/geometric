import { lineAngle } from "./lineAngle";
import { lineLength } from "./lineLength";
import { pointTranslate } from "../points/pointTranslate";
import type { ILine, IPoint } from "../interfaces";

// Returns an interpolator function given a line [s, t].
// The returned interpolator function takes a single argument t, where t is a number ranging from 0 to 1;
// a value of 0 returns s, while a value of 1 returns t.
// Intermediate values interpolate from start to end along the line segment.
export function lineInterpolate(line: ILine): (t: number) => IPoint {
    return (t) => {
        if (t === 0) {
            return line.s;
        } else if (t === 1) {
            return line.t;
        } else {
            return pointTranslate(line.s, lineAngle(line), lineLength(line) * t);
        }
    }
}
