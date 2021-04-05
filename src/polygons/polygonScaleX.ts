import { lineAngle } from "../lines/lineAngle";
import { lineLength } from "../lines/lineLength";
import { pointTranslate } from "../points/pointTranslate";
import { polygonCentroid } from "./polygonCentroid";
import { Line, Point } from "../types";

// Scales a polygon's x-coordinates by a scale factor (where 1 is the original size) from an origin point.
// The origin defaults to the polygon's centroid.
export function polygonScaleX(polygon: Point[], scale: number, origin: Point = polygonCentroid(polygon)): Point[] {
    let p: Point[] = [];

    for (let i = 0, l = polygon.length; i < l; i++) {
        const v = polygon[i],
        d = lineLength(new Line(origin, v)),
        a = lineAngle(new Line(origin, v)),
        t = pointTranslate(origin, a, d * scale);

        p[i] = new Point(t.x, v.y);
    }

    return p;
}
