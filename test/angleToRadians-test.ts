import tape from "tape";
import { angleToRadians } from "../src/";

tape("angleToRadians(angle) converts an angle from degrees to radians", (test: any) => {
  test.equal(angleToRadians(180).toFixed(3), (Math.PI).toFixed(3));
  test.equal(angleToRadians(360).toFixed(3), (Math.PI * 2).toFixed(3));
  test.equal(angleToRadians(0), 0);
  test.end();
});
