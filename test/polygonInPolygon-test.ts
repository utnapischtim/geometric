import * as tape from "tape";
import { polygonInPolygon, Point } from "../";

tape("polygonInPolygon(polygonA, polygonB) determines whether a polygon is contained by another polygon", function(test) {
    const polygon = [new Point(0, 0), new Point(2, 0), new Point(2, 2), new Point(0, 2)];

    test.equal(polygonInPolygon([new Point(.5, .5), new Point(1.5, .5), new Point(1.5, 1.5), new Point(.5, 1.5)], polygon), true);
    test.equal(polygonInPolygon([new Point(.5, .5), new Point(2.5, .5), new Point(1.5, 1.5), new Point(.5, 1.5)], polygon), false);
    test.equal(polygonInPolygon([new Point(3, 3), new Point(3, 4), new Point(4, 4)], polygon), false);

    test.end();
});

tape("polygonInPolygon(polygonA, polygonB) returns false if all of polygonA's vertices fall inside polygonB but one of its lines intersects polygonB", function(test) {
    const polygonA = [new Point(435, 223), new Point(503, 223), new Point(524, 158), new Point(469, 118), new Point(414, 158)];
    const polygonB = [new Point(388, 150), new Point(458, 150), new Point(458, 110), new Point(478, 53), new Point(486, 50), new Point(488, 20), new Point(490, 50), new Point(498, 53), new Point(518, 110), new Point(518, 150), new Point(588, 150), new Point(588, 270), new Point(388, 270), new Point(388, 150)];

    test.equal(polygonInPolygon(polygonA, polygonB), false);

    test.end();
});

tape("If polygonA in polygonInPolygon is forced closed, polygonA will not be altered", function(test) {
    const openPolygon = [new Point(0, 0), new Point(1, 0), new Point(1, 1)];
    const clonedBefore = openPolygon.slice();

    polygonInPolygon(openPolygon, [new Point(10, 0), new Point(11, 0), new Point(11, 11)]);
    test.deepEqual(clonedBefore, openPolygon);

    test.end();
});
