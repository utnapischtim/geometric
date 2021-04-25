import { Vector } from "./Vector";
import type { IPoint, IVector } from "../interfaces";

export class Point implements IPoint {
    public x: number;
    public y: number;

    public constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    public static fromArray(a: number[]) {
        return new this(a[0], a[1]);
    }

    public toArray(): number[] {
        return [this.x, this.y];
    }

    public xRound(): number {
        return Math.round(this.x);
    }

    public yRound(): number {
        return Math.round(this.y);
    }

    public add(v: IVector | IPoint): IPoint {
        return new Point(this.x + v.x, this.y + v.y);
    }

    public minus(b: IPoint): IVector {
        return new Vector(this.x - b.x, this.y - b.y);
    }

    public clone(): IPoint {
        return new Point(this.x, this.y);
    }

    public equal(b: IPoint, epsilon: number = 0.0000000001): boolean {
        return Math.abs(this.x - b.x) < epsilon && Math.abs(this.y - b.y) < epsilon;
    }

    public notEqual(b: IPoint): boolean {
        return !this.equal(b);
    }
}
