import type { ISegment, IVector, IPoint } from "../interfaces";

export class Vector implements IVector {
    public x: number;
    public y: number;

    public constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    public static fromSegment(seg: ISegment, normalize: boolean = false): IVector {
        const xd: number = seg.t.x - seg.s.x;
        const yd: number = seg.t.y - seg.s.y;

        const vec = new Vector(xd, yd);

        if (normalize) {
            vec.normalize();
        }

        return vec;
    }

    public length(): number {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }

    public normalize(): void {
        const length = this.length();
        this.x /= length;
        this.y /= length
    }

    public scale(factor: number): IVector {
        this.x *= factor;
        this.y *= factor;
        return this;
    }

    public add(b: IVector): IVector {
        return new Vector(this.x + b.x, this.y + b.y);
    }

    public invert(): IVector {
        return new Vector(this.x * -1, this.y * -1);
    }

    public dot(b: IVector): number {
        return this.x * b.x + this.y * b.y;
    }

    public norm(): number {
        return this.length();
    }

    public cross(b: IVector | IPoint): number {
        return this.x * b.y - b.x * this.y;
    }

    public mul(b: number): IVector {
        return new Vector(this.x * b, this.y * b);
    }
}
