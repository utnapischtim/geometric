import * as tape from "tape";
import { polygonMean, Point } from "../";

tape("polygonMean(p) calculates the arithmetic mean of a polygon's vertices", function(test) {
    const mc0 = polygonMean([new Point(0, 0), new Point(1, 0), new Point(1, 1), new Point(0, 1)]);
    const mc1 = polygonMean([new Point(0, 0), new Point(2, 0), new Point(2, 2), new Point(0, 2)]);

    test.equal(mc0.x, 0.5);
    test.equal(mc0.y, 0.5);
    test.equal(mc1.x, 1);
    test.equal(mc1.y, 1);
    test.end();
});
