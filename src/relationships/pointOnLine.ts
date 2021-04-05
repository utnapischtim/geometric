import { lineLength } from "../lines/lineLength";
import { cross } from "../utils/crossProduct";
import { Line, Point } from "../types";

// See https://math.stackexchange.com/questions/274712/calculate-on-which-side-of-a-straight-line-is-a-given-point-located
function topPointFirst(line: Line): Line {
    return line.t.y > line.s.y ? line : new Line(line.t, line.s);
}

export function pointLeftofLine(point: Point, line: Line): boolean {
    const t = topPointFirst(line);
    return cross(point, t.t, t.s) < 0;
}
export function pointRightofLine(point: Point, line: Line): boolean {
    const t = topPointFirst(line);
    return cross(point, t.t, t.s) > 0;
}
export function pointOnLine(point: Point, line: Line, epsilon: number = 0): boolean {
    const l = lineLength(line);
    return pointWithLine(point, line, epsilon) && lineLength(new Line(line.s, point)) <= l && lineLength(new Line(line.t, point)) <= l;
}
export function pointWithLine(point: Point, line: Line, epsilon: number = 0): boolean {
    return Math.abs(cross(point, line.s, line.t)) <= epsilon;
}
