import tape from "tape";
import { lineLength, Line, Point } from "../src/";

tape("lineLength(line) calculates the length of a line segment", (test: any) => {
    test.equal(lineLength(new Line(new Point(0, 0), new Point(0, 1))), 1);
    test.equal(lineLength(new Line(new Point(0, 0), new Point(0, -1))), 1);
    test.equal(lineLength(new Line(new Point(1, 0), new Point(1, 0))), 0);
    test.equal(lineLength(new Line(new Point(1, 0), new Point(-1, 0))), 2);
    test.end();
});
