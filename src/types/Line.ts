import { Point } from "./Point";

export class Line {
    public s: Point;
    public t: Point;

    public constructor(source: Point, target: Point) {
        this.s = source;
        this.t = target;
    }

    public reverse(): Line {
        return new Line(this.t, this.s);
    }
}
