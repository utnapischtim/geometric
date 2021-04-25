import tape from "tape";
import { polygonBounds, Point } from "../src/";

tape("polygonBounds(polygon) returns null if the polygon has fewer than 3 points", (test: any) => {
    test.equal(polygonBounds([]), null);
    test.equal(polygonBounds([new Point(0, 1)]), null);
    test.equal(polygonBounds([new Point(0, 1), new Point(1, 2)]), null);
    test.deepEqual(polygonBounds([new Point(0, 1), new Point(1, 2), new Point(0, 3)]), [new Point(0, 1), new Point(1, 3)]);
    test.end();
});

tape("polygonBounds(polygon) calculates the bounds a polygon", (test: any) => {
    const polygon = [new Point(110, 40), new Point(210, 10), new Point(310, 40), new Point(360, 140), new Point(310, 240), new Point(210, 270), new Point(110, 240), new Point(60, 140)];
    const bounds = polygonBounds(polygon);

    test.equal(bounds[0].x, 60);
    test.equal(bounds[0].y, 10);
    test.equal(bounds[1].x, 360);
    test.equal(bounds[1].y, 270);
    test.end();
});

// not necessary for typescript
// tape("polygonBounds(polygon) ignores null values", function(test) {
//     test.deepEqual(polygonBounds([new Point(null, 5), new Point(0, 1), new Point(1, 2), new Point(0, 3)]), [new Point(0, 1), new Point(1, 3)]);
//     test.deepEqual(polygonBounds([new Point(undefined, 5), new Point(0, 1), new Point(1, 2), new Point(0, 3)]), [new Point(0, 1), new Point(1, 3)]);
//     test.deepEqual(polygonBounds([new Point(NaN, 5), new Point(0, 1), new Point(1, 2), new Point(0, 3)]), [new Point(0, 1), new Point(1, 3)]);
//     test.deepEqual(polygonBounds([new Point(5, Infinity), new Point(0, 1), new Point(1, 2), new Point(0, 3)]), [new Point(0, 1), new Point(1, 3)]);
//     test.end();
// });
