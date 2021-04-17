import { Point, Line } from "../types";

export class Segment {
    public s: Point;
    public t: Point;

    public constructor(source: Point, target: Point) {
        this.s = source;
        this.t = target;
    }

    public static fromLine(line: Line) {
        return new Segment(line.s, line.t);
    }

    public reverse(): Segment {
        return new Segment(this.t, this.s);
    }

    public equal(seg: Segment): boolean {
        return (this.s.equal(seg.s) && this.t.equal(seg.t)) || (this.s.equal(seg.t) && this.t.equal(seg.s));
    }

    public notEqual(seg: Segment): boolean {
        return !this.equal(seg);
    }
}
