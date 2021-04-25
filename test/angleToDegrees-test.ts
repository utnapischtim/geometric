import tape from "tape";
import { angleToDegrees } from "../src/";

tape("angleToDegrees(angle) converts an angle from radians to degrees", (test: any) => {
  test.equal(angleToDegrees(Math.PI), 180);
  test.equal(angleToDegrees(Math.PI * 2), 360);
  test.equal(angleToDegrees(0), 0);
  test.end();
});
