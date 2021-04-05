import * as tape from "tape";
import { lineInterpolate, Line, Point } from "../";

tape("lineInterpolate(line) returns points along a line", function(test) {
    const line = new Line(new Point(236, 0), new Point(708, 190));
    const interpolator = lineInterpolate(line);

    test.deepEqual(interpolator(0), line.s);
    test.deepEqual(interpolator(1), line.t);
    test.deepEqual(interpolator(.1), new Point(283.2, 19));
    test.deepEqual(interpolator(.2), new Point(330.4, 38));
    test.deepEqual(interpolator(.3), new Point(377.6, 56.99999999999999));
    test.deepEqual(interpolator(.4), new Point(424.8, 76));
    test.deepEqual(interpolator(.5), new Point(472, 94.99999999999999));
    test.deepEqual(interpolator(.6), new Point(519.2, 113.99999999999999));
    test.deepEqual(interpolator(.7), new Point(566.4, 132.99999999999997));
    test.deepEqual(interpolator(.8), new Point(613.6, 152));
    test.deepEqual(interpolator(.9), new Point(660.8, 171));
    test.end();
});
