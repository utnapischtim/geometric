import tape from "tape";
import { polygonScale, Point } from "../src/";

tape("polygonScale(polygon, scaleFactor, origin) scales a polygon by a scale factor from an origin point.", (test: any) => {
    const polygon = [new Point(738.5, 168.5), new Point(838.5, 138.5), new Point(938.5, 168.5), new Point(988.5, 268.5), new Point(938.5, 368.5), new Point(838.5, 398.5), new Point(738.5, 368.5), new Point(688.5, 268.5)];
    const polygonDoubled = polygonScale(polygon, 2);

    test.equal(polygonDoubled[0].x, 638.5);
    test.equal(Math.round(polygonDoubled[0].y), 68);

    test.equal(polygonDoubled[1].x, 838.5);
    test.equal(polygonDoubled[1].y, 8.5);

    test.equal(polygonDoubled[2].x, 1038.5);
    test.equal(polygonDoubled[2].y, 68.5);

    test.equal(polygonDoubled[3].x, 1138.5);
    test.equal(polygonDoubled[3].y, 268.5);

    test.equal(polygonDoubled[4].x, 1038.5);
    test.equal(polygonDoubled[4].y, 468.5);

    test.equal(polygonDoubled[5].x, 838.5);
    test.equal(polygonDoubled[5].y, 528.5);

    test.equal(polygonDoubled[6].x, 638.5);
    test.equal(polygonDoubled[6].y, 468.5);

    test.equal(polygonDoubled[7].x, 538.5);
    test.equal(Math.round(polygonDoubled[7].y), 269);

    test.end();
});
