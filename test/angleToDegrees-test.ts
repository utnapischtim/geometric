import * as tape from "tape";
import { angleToDegrees } from "../";

tape("angleToDegrees(angle) converts an angle from radians to degrees", function(test) {
  test.equal(angleToDegrees(Math.PI), 180);
  test.equal(angleToDegrees(Math.PI * 2), 360);
  test.equal(angleToDegrees(0), 0);
  test.end();
});
