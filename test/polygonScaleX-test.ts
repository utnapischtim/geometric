import * as tape from "tape";
import { polygonScaleX, Point } from "../";

tape("polygonScaleX(polygon, scaleFactor, origin) scales a polygon's x-coordinates by a scale factor from an origin point.", function(test) {
    const polygon = [new Point(738.5, 168.5), new Point(838.5, 138.5), new Point(938.5, 168.5), new Point(988.5, 268.5), new Point(938.5, 368.5), new Point(838.5, 398.5), new Point(738.5, 368.5), new Point(688.5, 268.5)],
    polygonDoubled = polygonScaleX(polygon, 2);

    test.equal(polygonDoubled[0].x, 638.5);
    test.equal(polygonDoubled[0].y, polygon[0].y);

    test.equal(polygonDoubled[1].x, 838.5);
    test.equal(polygonDoubled[1].y, polygon[1].y);

    test.equal(polygonDoubled[2].x, 1038.5);
    test.equal(polygonDoubled[2].y, polygon[2].y);

    test.equal(polygonDoubled[3].x, 1138.5);
    test.equal(polygonDoubled[3].y, polygon[3].y);

    test.equal(polygonDoubled[4].x, 1038.5);
    test.equal(polygonDoubled[4].y, polygon[4].y);

    test.equal(polygonDoubled[5].x, 838.5);
    test.equal(polygonDoubled[5].y, polygon[5].y);

    test.equal(polygonDoubled[6].x, 638.5);
    test.equal(polygonDoubled[6].y, polygon[6].y);

    test.equal(polygonDoubled[7].x, 538.5);
    test.equal(polygonDoubled[7].y, polygon[7].y);

    test.end();
});
