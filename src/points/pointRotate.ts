import { angleToRadians } from "../angles/angleToRadians";
import { Point } from "../types";

// Rotates a point by an angle in degrees around an origin.
export function pointRotate(point: Point, angle: number, origin: Point = new Point(0, 0)): Point {
    const r = angleToRadians(angle);

    if (origin.x === 0 && origin.y === 0) {
        return rotate(point, r);
    }
    else {
        // See: https://math.stackexchange.com/questions/1964905/rotation-around-non-zero-point
        // const p0 = point.map((c, i) => c - origin[i]);
        // const rotated = rotate(p0, r);
        // return rotated.map((c, i) => c + origin[i]);
        const p0 = new Point(point.x - origin.x, point.y - origin.y);
        const rotated = rotate(p0, r);
        return new Point(rotated.x + origin.x, rotated.y + origin.y);
    }
}

function rotate(point: Point, angle: number) {
    // See: https://en.wikipedia.org/wiki/Cartesian_coordinate_system#Rotation
    const x: number = (point.x * Math.cos(angle)) - point.y * Math.sin(angle);
    const y: number = (point.x * Math.sin(angle)) + point.y * Math.cos(angle);
    return new Point(x, y);
}
