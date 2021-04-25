import tape from "tape";
import { angleReflect } from "../src/";

tape("angleReflect(incidenceAngle, surfaceAngle) returns the angle of reflection.", (test: any) => {
  test.equal(angleReflect(0, 90), 180);
  test.equal(angleReflect(0, 45), 90);
  test.equal(angleReflect(180, 90), 0);
  test.equal(angleReflect(180, 45), 270);
  test.equal(angleReflect(45, 0), 315);
  test.equal(angleReflect(45, 90), 135);
  test.equal(angleReflect(45, 180), 315);
  test.equal(angleReflect(45, 270), 135);
  test.equal(angleReflect(45, 360), 315);
  test.end();
});
