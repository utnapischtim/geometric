import * as tape from "tape";
import { polygonScaleY, Point } from "../";

tape("polygonScaleY(polygon, scaleFactor, origin) scales a polygon's y-coordinates by a scale factor from an origin point.", function(test) {
    const polygon = [new Point(738.5, 168.5), new Point(838.5, 138.5), new Point(938.5, 168.5), new Point(988.5, 268.5), new Point(938.5, 368.5), new Point(838.5, 398.5), new Point(738.5, 368.5), new Point(688.5, 268.5)];
    const polygonDoubled = polygonScaleY(polygon, 2);

    test.equal(polygonDoubled[0].x, polygon[0].x);
    test.equal(Math.round(polygonDoubled[0].y), 68);

    test.equal(polygonDoubled[1].x, polygon[1].x);
    test.equal(polygonDoubled[1].y, 8.5);

    test.equal(polygonDoubled[2].x, polygon[2].x);
    test.equal(polygonDoubled[2].y, 68.5);

    test.equal(polygonDoubled[3].x, polygon[3].x);
    test.equal(polygonDoubled[3].y, 268.5);

    test.equal(polygonDoubled[4].x, polygon[4].x);
    test.equal(polygonDoubled[4].y, 468.5);

    test.equal(polygonDoubled[5].x, polygon[5].x);
    test.equal(polygonDoubled[5].y, 528.5);

    test.equal(polygonDoubled[6].x, polygon[6].x);
    test.equal(polygonDoubled[6].y, 468.5);

    test.equal(polygonDoubled[7].x, polygon[7].x);
    test.equal(Math.round(polygonDoubled[7].y), 269);

    test.end();
});
