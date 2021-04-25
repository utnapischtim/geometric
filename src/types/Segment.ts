import type { IPoint, ILine, ISegment } from "../interfaces";

export class Segment implements ISegment {
    public s: IPoint;
    public t: IPoint;

    public constructor(source: IPoint, target: IPoint) {
        this.s = source;
        this.t = target;
    }

    public static fromLine(line: ILine): ISegment {
        return new Segment(line.s, line.t);
    }

    public reverse(): ISegment {
        return new Segment(this.t, this.s);
    }

    public equal(seg: ISegment): boolean {
        return (this.s.equal(seg.s) && this.t.equal(seg.t)) || (this.s.equal(seg.t) && this.t.equal(seg.s));
    }

    public notEqual(seg: ISegment): boolean {
        return !this.equal(seg);
    }
}
