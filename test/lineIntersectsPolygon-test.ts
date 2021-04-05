import * as tape from "tape";
import { lineIntersectsPolygon, Line, Point } from "../";

tape("lineIntersectsPolygon(line, polygon) determines whether a line intersects a polygon", function(test) {
    const polygon = [new Point(5, 3), new Point(10, 3), new Point(10, 8), new Point(5, 8)];
    const lineA = new Line(new Point(4, 6), new Point(8, 2));
    const lineB = new Line(new Point(4, 6), new Point(11, 6));
    const lineC = new Line(new Point(4, 9), new Point(11, 9));

    test.equal(lineIntersectsPolygon(lineA, polygon), true);
    test.equal(lineIntersectsPolygon(lineB, polygon), true);
    test.equal(lineIntersectsPolygon(lineC, polygon), false);
    test.end();
});

tape("lineIntersectsPolygon(line, polygon) should return true even if the line is only collinear with one of the polygon's segments", function(test) {
    const polygon = [new Point(388, 150), new Point(458, 150), new Point(458, 110), new Point(478, 53), new Point(486, 50), new Point(488, 20), new Point(490, 50), new Point(498, 53), new Point(518, 110), new Point(518, 150), new Point(588, 150), new Point(588, 270), new Point(388, 270)];
    const line = new Line(new Point(98, 150), new Point(878, 150));

    test.equal(lineIntersectsPolygon(line, polygon), true);
    test.end();
});
