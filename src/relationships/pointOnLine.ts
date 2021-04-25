import { lineLength } from "../lines/lineLength";
import { cross } from "../utils/crossProduct";
import { Line } from "../types";
import type { ILine, IPoint } from "../interfaces";

// See https://math.stackexchange.com/questions/274712/calculate-on-which-side-of-a-straight-line-is-a-given-point-located
function topPointFirst(line: ILine): ILine {
    return line.t.y > line.s.y ? line : new Line(line.t, line.s);
}

export function pointLeftofLine(point: IPoint, line: ILine): boolean {
    const t = topPointFirst(line);
    return cross(point, t.t, t.s) < 0;
}
export function pointRightofLine(point: IPoint, line: ILine): boolean {
    const t = topPointFirst(line);
    return cross(point, t.t, t.s) > 0;
}
export function pointOnLine(point: IPoint, line: ILine, epsilon: number = 0): boolean {
    const l = lineLength(line);
    return pointWithLine(point, line, epsilon) && lineLength(new Line(line.s, point)) <= l && lineLength(new Line(line.t, point)) <= l;
}
export function pointWithLine(point: IPoint, line: ILine, epsilon: number = 0): boolean {
    return Math.abs(cross(point, line.s, line.t)) <= epsilon;
}
