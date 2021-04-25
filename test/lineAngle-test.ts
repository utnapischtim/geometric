import tape from "tape";
import { lineAngle, Line, Point } from "../src/";

tape("lineAngle(line) calculates the angle of a line, in degrees", (test: any) => {
    test.equal(lineAngle(new Line(new Point(0, 0), new Point(0, 1))), 90);
    test.equal(lineAngle(new Line(new Point(0, 0), new Point(0, -1))), -90);
    test.equal(lineAngle(new Line(new Point(0, 0), new Point(1, 0))), 0);
    test.equal(lineAngle(new Line(new Point(0, 0), new Point(-1, 0))), 180);
    test.equal(lineAngle(new Line(new Point(0, 0), new Point(1, 1))), 45);
    test.equal(lineAngle(new Line(new Point(0, 0), new Point(-1, -1))), -135);
    test.end();
});
