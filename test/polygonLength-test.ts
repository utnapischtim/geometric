import * as tape from "tape";
import { polygonLength, Point } from "../";

tape("polygonLength(polygon) calculates the length of a polygon's perimeter", function(test) {
    test.equal(polygonLength([new Point(0, 0), new Point(1, 0), new Point(1, 1), new Point(0, 1)]), 4);
    test.equal(polygonLength([new Point(0, 0), new Point(1, 0), new Point(1, 1), new Point(0, 1), new Point(0, 0)]), 4);
    test.end();
});

tape("polygonLength(polygon) returns 0 if the polygon has 0 or 1 points", function(test) {
    test.equal(polygonLength([]), 0);
    test.equal(polygonLength([new Point(0, 0)]), 0);
    test.end();
});
