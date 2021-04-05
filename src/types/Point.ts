export class Point {
    public x: number;
    public y: number;

    public constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    public xRound(): number {
        return Math.round(this.x);
    }

    public yRound(): number {
        return Math.round(this.y);
    }
}
