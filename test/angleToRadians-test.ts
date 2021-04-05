import * as tape from "tape";
import { angleToRadians } from "../";

tape("angleToRadians(angle) converts an angle from degrees to radians", function(test) {
  test.equal(angleToRadians(180).toFixed(3), (Math.PI).toFixed(3));
  test.equal(angleToRadians(360).toFixed(3), (Math.PI * 2).toFixed(3));
  test.equal(angleToRadians(0), 0);
  test.end();
});
