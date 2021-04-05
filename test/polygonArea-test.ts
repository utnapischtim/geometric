import * as tape from "tape";
import { polygonArea, Point } from "../";

tape("polygonArea(polygon) calculates the area of a polygon", function(test) {
    test.equal(polygonArea([new Point(0, 0), new Point(1, 0), new Point(1, 1), new Point(0, 1)]), 1);
    test.equal(polygonArea([new Point(0, 0), new Point(2, 0), new Point(2, 2), new Point(0, 2)]), 4);
    test.equal(polygonArea([new Point(0, 0), new Point(3, 0), new Point(3, 3), new Point(0, 3)]), 9);
    test.equal(polygonArea([new Point(0, 0), new Point(1, 0), new Point(1, 1), new Point(0, 1), new Point(0, 0)]), 1);
    test.equal(polygonArea([new Point(0, 0), new Point(2, 0), new Point(2, 2), new Point(0, 2), new Point(0, 0)]), 4);
    test.equal(polygonArea([new Point(0, 0), new Point(3, 0), new Point(3, 3), new Point(0, 3), new Point(0, 0)]), 9);
    test.end();
});

tape("If the polygon's winding order is counter-clockwise and signed is set to true, returns a negative area", function(test) {
    const p = [new Point(119, 87), new Point(61, 150), new Point(131, 197), new Point(206, 135)];

    test.equal(polygonArea(p, true), -8065);
    test.equal(polygonArea(p, false), 8065);
    test.equal(polygonArea(p), 8065);
    test.end();
});

