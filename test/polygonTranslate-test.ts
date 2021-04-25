import tape from "tape";
import { polygonTranslate, Point } from "../src/";

tape("polygonTranslate(polygon, angle, distance) translates a polygon by an angle in degrees and distance.", (test: any) => {
    const myPolygon = [new Point(100, 100), new Point(150, 100), new Point(125, 125), new Point(150, 150), new Point(100, 150)];
    const newPolygon = polygonTranslate(myPolygon, 90, 100);

    test.equal(newPolygon[0].x, 100);
    test.equal(newPolygon[0].y, 200);

    test.equal(newPolygon[1].x, 150);
    test.equal(newPolygon[1].y, 200);

    test.equal(newPolygon[2].x, 125);
    test.equal(newPolygon[2].y, 225);

    test.equal(newPolygon[3].x, 150);
    test.equal(newPolygon[3].y, 250);

    test.equal(newPolygon[4].x, 100);
    test.equal(newPolygon[4].y, 250);

    test.end();
});
