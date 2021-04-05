import * as tape from "tape";
import { pointOnPolygon, Point } from "../";

tape("pointOnPolygon(point, polygon) determines whether a point is located on one of the edges of a polygon", function(test) {
    const polygon = [new Point(10, 10), new Point(50, 10), new Point(50, 50), new Point(10, 50)];

    test.equal(pointOnPolygon(new Point(30, 10), polygon), true);
    test.equal(pointOnPolygon(new Point(50, 30), polygon), true);
    test.equal(pointOnPolygon(new Point(30, 50), polygon), true);
    test.equal(pointOnPolygon(new Point(10, 30), polygon), true);
    test.equal(pointOnPolygon(new Point(30, 30), polygon), false);
    test.equal(pointOnPolygon(new Point(30, 70), polygon), false);
    test.end();
});
