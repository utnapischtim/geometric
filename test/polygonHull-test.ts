import * as tape from "tape";
import { polygonHull, Point } from "../";

tape("polygonHull(points) returns null if there are fewer than 3 input points", function(test) {
    test.equal(polygonHull([]), null);
    test.equal(polygonHull([new Point(0, 1)]), null);
    test.equal(polygonHull([new Point(0, 1), new Point(1, 2)]), null);
    test.end();
});

tape("polygonHull(points) calculates the convex hull of a set of points", function(test) {
    const vertices = [new Point(0, 0), new Point(0, 2), new Point(2, 2), new Point(2, 0), new Point(1, 1)];
    const hull = polygonHull(vertices);

    test.equal(hull.length, 4);
    test.equal(hull[0].x, 0);
    test.equal(hull[0].y, 0);
    test.equal(hull[1].x, 2);
    test.equal(hull[1].y, 0);
    test.equal(hull[2].x, 2);
    test.equal(hull[2].y, 2);
    test.equal(hull[3].x, 0);
    test.equal(hull[3].y, 2);
    test.end();
});

tape("polygonHull(points) does not modify its input array", function(test) {
    const input = [new Point(0, 1), new Point(1, 2), new Point(0, 3)];
    const clone = input.slice();
    const hull = polygonHull(input);

    test.deepEqual(input, clone);
    test.end();
});
