import * as tape from "tape";
import { polygonRotate, Point } from "../";

tape("polygonRotate(polygon, angle, origin) rotates a polygon by an angle in degrees around an origin", function(test) {
    const myPolygon = [new Point(100, 100), new Point(150, 100), new Point(125, 125), new Point(150, 150), new Point(100, 150)];
    const myOrigin = new Point(200, 200);
    const by45 = polygonRotate(myPolygon, 45, myOrigin);

    test.equal(by45[0].x, 200);
    test.equal(Math.round(by45[0].y), 59);

    test.equal(Math.round(by45[1].x), 235);
    test.equal(Math.round(by45[1].y), 94);

    test.equal(by45[2].x, 200);
    test.equal(Math.round(by45[2].y), 94);

    test.equal(by45[3].x, 200);
    test.equal(Math.round(by45[3].y), 129);

    test.equal(Math.round(by45[4].x), 165);
    test.equal(Math.round(by45[4].y), 94);

    test.end();
});
