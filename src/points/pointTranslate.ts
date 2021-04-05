import { angleToRadians } from "../angles/angleToRadians";
import { Point } from "../types";

// Translates a point by an angle in degrees and distance
export function pointTranslate(point: Point, angle: number, distance: number): Point {
    const r: number = angleToRadians(angle);
    const x: number = point.x + distance * Math.cos(r);
    const y: number = point.y + distance * Math.sin(r);
    return new Point(x, y);
}
