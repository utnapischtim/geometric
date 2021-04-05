import * as tape from "tape";
import { lineIntersectsLine, Line, Point } from "../";


tape("lineIntersectsLine(lineA, lineB) determines whether lineA intersects lineB", function(test) {
    const lineA = new Line(new Point(1, 4), new Point(3, 4));
    const lineB = new Line(new Point(2, 1), new Point(2, 7));
    const lineC = new Line(new Point(1, 8), new Point(3, 8));

    test.equal(lineIntersectsLine(lineA, lineB), true);
    test.equal(lineIntersectsLine(lineA, lineC), false);
    test.equal(lineIntersectsLine(lineB, lineC), false);
    test.end();
});

// See https://github.com/HarryStevens/geometric/issues/10
tape("lineIntersectsLine(lineA, lineB) returns true if lineA and lineB share an endpoint", function(test) {
    const line1 = new Line(new Point(50.054358, 8.693184), new Point(50.055604, 8.685873));
    const line2 = new Line(new Point(50.054228, 8.69338), new Point(50.054358, 8.693184));

    test.equal(lineIntersectsLine(line1, line2), true);
    test.equal(lineIntersectsLine(line2, line1), true);
    test.end();
});
