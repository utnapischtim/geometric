import type { IPoint, ILine } from "../interfaces";

export class Line implements ILine {
    public s: IPoint;
    public t: IPoint;

    public constructor(source: IPoint, target: IPoint) {
        this.s = source;
        this.t = target;
    }

    public reverse(): ILine {
        return new Line(this.t, this.s);
    }
}
