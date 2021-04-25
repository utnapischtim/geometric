import tape from "tape";
import { pointInPolygon, Point } from "../src/";

tape("pointInPolygon(point, vertices) determines whether a point is in a polygon", (test) => {
    const polygon = [new Point(0, 0), new Point(2, 0), new Point(2, 2), new Point(0, 2)];

    test.equal(pointInPolygon(new Point(1, 1), polygon), true);
    test.equal(pointInPolygon(new Point(3, 3), polygon), false);
    test.end();
});
