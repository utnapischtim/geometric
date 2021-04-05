import * as tape from "tape";
import { pointRotate, Point } from "../";

tape("pointRotate(point, angle, origin) rotates a point by an angle in degrees around an origin", function(test) {
    test.equal(pointRotate(new Point(1, 1), 90).xRound(), -1);
    test.equal(pointRotate(new Point(1, 1), 90).yRound(), 1);
    test.equal(pointRotate(new Point(1, 1), 180).xRound(), -1);
    test.equal(pointRotate(new Point(1, 1), 180).yRound(), -1);
    test.equal(pointRotate(new Point(1, 1), 180, new Point(0, 0)).xRound(), -1);
    test.equal(pointRotate(new Point(1, 1), 180, new Point(0, 0)).yRound(), -1);
    test.equal(pointRotate(new Point(1, 1), 90, new Point(2, 2)).xRound(), 3);
    test.equal(pointRotate(new Point(1, 1), 90, new Point(2, 2)).yRound(), 1);
    test.equal(pointRotate(new Point(1, 1), 180, new Point(2, 2)).xRound(), 3);
    test.equal(pointRotate(new Point(1, 1), 180, new Point(2, 2)).yRound(), 3);
    test.end();
});
