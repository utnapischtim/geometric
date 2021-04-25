import tape from "tape";
import { polygonCentroid, Point } from "../src/";

tape("polygonCentroid(polygon) calculates the weighted centroid of a polygon", (test: any) => {
    const p0 = polygonCentroid([new Point(0, 0), new Point(1, 0), new Point(1, 1), new Point(0, 1)]);
    const p1 = polygonCentroid([new Point(0, 0), new Point(2, 0), new Point(2, 2), new Point(0, 2)]);
    const p2 = polygonCentroid([new Point(0, 0), new Point(1, 0), new Point(1, 1), new Point(0, 1), new Point(0, 0)]);
    const p3 = polygonCentroid([new Point(0, 0), new Point(2, 0), new Point(2, 2), new Point(0, 2), new Point(0, 0)]);

    test.equal(p0.x, 0.5);
    test.equal(p0.y, 0.5);
    test.equal(p1.x, 1);
    test.equal(p1.y, 1);
    test.equal(p2.x, 0.5);
    test.equal(p2.y, 0.5);
    test.equal(p3.x, 1);
    test.equal(p3.y, 1);
    test.end();
});
