import { lineAngle } from "../lines/lineAngle";
import { lineLength } from "../lines/lineLength";
import { pointTranslate } from "../points/pointTranslate";
import { polygonTranslate } from "./polygonTranslate";
import { Line, Point } from "../types";

// Returns the vertices of a regular polygon of the specified number of sides, area, and center coordinates.
export function polygonRegular(sides: number = 3, area: number = 100, center: Point | null = null): Point[] {
    let polygon: Point[] = [];
    let point: Point = new Point(0, 0);
    let sum: Point = new Point(0, 0);
    let angle: number = 0;

    for (let i = 0; i < sides; i++) {
        polygon[i] = point;
        sum.x += point.x;
        sum.y += point.y;
        point = pointTranslate(point, angle, Math.sqrt((4 * area) * Math.tan(Math.PI / sides) / sides)); // https://web.archive.org/web/20180404142713/http://keisan.casio.com/exec/system/1355985985
        angle -= 360 / sides;
    }

    if (center) {
        const line = new Line(new Point(sum.x / sides, sum.y / sides), center);
        polygon = polygonTranslate(polygon, lineAngle(line), lineLength(line));
    }

    return polygon;
}
