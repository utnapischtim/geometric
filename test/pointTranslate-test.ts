import tape from "tape";
import { pointTranslate, Point } from "../src/";

tape("pointTranslate(point, angle, distance) translates a point by an angle in degrees and distance", (test: any) => {
    test.equal(pointTranslate(new Point(0, 0), 0, 1).xRound(), 1);
    test.equal(pointTranslate(new Point(0, 0), 0, 1).yRound(), 0);

    test.equal(pointTranslate(new Point(0, 0), 90, 1).xRound(), 0);
    test.equal(pointTranslate(new Point(0, 0), 90, 1).yRound(), 1);

    test.equal(pointTranslate(new Point(0, 0), 180, 1).xRound(), -1);
    test.equal(pointTranslate(new Point(0, 0), 180, 1).yRound(), 0);

    test.equal(pointTranslate(new Point(0, 0), 270, 1).xRound(), 0);
    test.equal(pointTranslate(new Point(0, 0), 270, 1).yRound(), -1);

    test.equal(pointTranslate(new Point(0, 0), 360, 1).xRound(), 1);
    test.equal(pointTranslate(new Point(0, 0), 360, 1).yRound(), 0);

    test.end();
});
