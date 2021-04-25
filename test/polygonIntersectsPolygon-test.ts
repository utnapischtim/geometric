import tape from "tape";
import { polygonIntersectsPolygon, Point } from "../src/";

tape("polygonIntersectsPolygon(polygonA, polygonB) determines whether two polygons intersect but neither contains the other", (test: any) => {
    const polygon = [new Point(0, 0), new Point(2, 0), new Point(2, 2), new Point(0, 2)];

    test.equal(polygonIntersectsPolygon([new Point(.5, .5), new Point(1.5, .5), new Point(1.5, 1.5), new Point(.5, 1.5)], polygon), false);
    test.equal(polygonIntersectsPolygon([new Point(.5, .5), new Point(2.5, .5), new Point(2.5, 2.5), new Point(.5, 2.5)], polygon), true);
    test.equal(polygonIntersectsPolygon([new Point(3, 3), new Point(3, 4), new Point(4, 4)], polygon), false);

    // Test cases where lines overlap but no points are inside
    const polygonA = [new Point(5, 3), new Point(10, 3), new Point(10, 8), new Point(5, 8)];
    const polygonB = [new Point(4, 6), new Point(8, 2), new Point(11, 6)];
    const polygonC = [new Point(4, 6), new Point(11, 6), new Point(11, 9), new Point(4, 9)];

    test.equal(polygonIntersectsPolygon(polygonA, polygonB), true);
    test.equal(polygonIntersectsPolygon(polygonB, polygonA), true);
    test.equal(polygonIntersectsPolygon(polygonA, polygonC), true);
    test.equal(polygonIntersectsPolygon(polygonC, polygonA), true);

    test.end();
});

tape("If polygonA in polygonIntersectsPolygon is forced closed, polygonA will not be altered", (test: any) => {
    const openPolygon = [new Point(0, 0), new Point(1, 0), new Point(1, 1)];
    const clonedBefore = openPolygon.slice();

    polygonIntersectsPolygon(openPolygon, [new Point(10, 0), new Point(11, 0), new Point(11, 11)]);
    test.deepEqual(clonedBefore, openPolygon);

    test.end();
});

tape("polygonIntersectsPolygon(polygonA, polygonB) returns true if overlapping rectangles share two edges", (test: any) => {
    const a = [new Point(562.6875, 304.4375), new Point(601.09375, 304.4375), new Point(601.09375, 322.9375), new Point(562.6875, 322.9375)];
    const b = [new Point(562.6875, 298.4375), new Point(601.09375, 298.4375), new Point(601.09375, 316.9375), new Point(562.6875, 316.9375)];

    test.equal(polygonIntersectsPolygon(a, b), true);

    test.end();
});

tape("polygonIntersectsPolygon(polygonA, polygonB) detects intersections in special cases", (test: any) => {
    // One of the polygons just has two points. See https://github.com/HarryStevens/geometric/issues/13
    const a = [new Point(180, 140), new Point(180, 205)];
    const b = [new Point(160, 180), new Point(170, 181.72), new Point(180, 187.64), new Point(185, 193.41)];

    test.equal(polygonIntersectsPolygon(a, b), true);

    test.end();
});
