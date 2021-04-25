import { lineAngle } from "../lines/lineAngle";
import { lineLength } from "../lines/lineLength";
import { pointTranslate } from "../points/pointTranslate";
import { polygonCentroid } from "./polygonCentroid";
import { Point, Segment } from "../types";
import type { IPoint } from "../interfaces";

// Scales a polygon's y-coordinates by a scale factor (where 1 is the original size) from an origin point.
// The origin defaults to the polygon's centroid.
export function polygonScaleY(polygon: IPoint[], scale: number, origin: IPoint = polygonCentroid(polygon)): IPoint[] {
    const scaledPolygon: IPoint[] = [];

    for (const v of polygon) {
        const d: number = lineLength(new Segment(origin, v));
        const a: number = lineAngle(new Segment(origin, v));
        const t: Point = pointTranslate(origin, a, d * scale);

        scaledPolygon.push(new Point(v.x, t.y));
    }

    return scaledPolygon;
}
