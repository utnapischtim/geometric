import { lineAngle } from "../lines/lineAngle";
import { lineLength } from "../lines/lineLength";
import { pointTranslate } from "../points/pointTranslate";
import { polygonTranslate } from "./polygonTranslate";
import { Line, Point } from "../types";
import type { IPoint } from "../interfaces";

// Returns the vertices of a regular polygon of the specified number of sides, area, and center coordinates.
export function polygonRegular(sides: number = 3, area: number = 100, center: IPoint | null = null): IPoint[] {
    let polygon: IPoint[] = [];
    let point: IPoint = new Point(0, 0);
    let xSum: number = 0;
    let ySum: number = 0;
    let angle: number = 0;


    for (let i = 0; i < sides; i++) {
        polygon[i] = point;
        xSum += point.x;
        ySum += point.y;
        point = pointTranslate(point, angle, Math.sqrt((4 * area) * Math.tan(Math.PI / sides) / sides)); // https://web.archive.org/web/20180404142713/http://keisan.casio.com/exec/system/1355985985
        angle -= 360 / sides;
    }

    if (center) {
        const line = new Line(new Point(xSum / sides, ySum / sides), center);
        polygon = polygonTranslate(polygon, lineAngle(line), lineLength(line));
    }

    return polygon;
}
