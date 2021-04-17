import { Segment, Point } from "../types";

export class Vector {
    public x: number;
    public y: number;

    public constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    public static fromSegment(seg: Segment, normalize: boolean = false): Vector {
        const xd: number = seg.t.x - seg.s.x,
              yd: number = seg.t.y - seg.s.y;

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

    public scale(factor: number): Vector {
        this.x *= factor;
        this.y *= factor;
        return this;
    }

    public add(b: Vector): Vector {
        return new Vector(this.x + b.x, this.y + b.y);
    }

    public invert(): Vector {
        return new Vector(this.x * -1, this.y * -1);
    }

    public dot(b: Vector): number {
        return this.x * b.x + this.y * b.y;
    }

    public norm(): number {
        return this.length();
    }

    public cross(b: Vector | Point): number {
        return this.x * b.y - b.x * this.y;
    }

    public mul(b: number): Vector {
        return new Vector(this.x * b, this.y * b);
    }
}
