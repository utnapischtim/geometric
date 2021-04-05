import * as tape from "tape";
import { lineMidpoint, Line, Point } from "../";

tape("lineMidpoint(line) calculates the midpoint of a line segment", function(test) {
    test.equal(lineMidpoint(new Line(new Point(0, 0), new Point(0, 1))).x, 0);
    test.equal(lineMidpoint(new Line(new Point(0, 0), new Point(0, 1))).y, .5);
    test.equal(lineMidpoint(new Line(new Point(0, 0), new Point(0, -1))).x, 0);
    test.equal(lineMidpoint(new Line(new Point(0, 0), new Point(0, -1))).y, -.5);
    test.equal(lineMidpoint(new Line(new Point(1, 0), new Point(1, 0))).x, 1);
    test.equal(lineMidpoint(new Line(new Point(1, 0), new Point(1, 0))).y, 0);
    test.equal(lineMidpoint(new Line(new Point(1, 0), new Point(-1, 0))).x, 0);
    test.equal(lineMidpoint(new Line(new Point(1, 0), new Point(-1, 0))).y, 0);
    test.end();
});
