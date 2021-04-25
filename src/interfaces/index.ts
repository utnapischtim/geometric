export interface IPoint {
    readonly x: number;
    readonly y: number;

    toArray(): number[];
    xRound(): number;
    yRound(): number;
    add(v: IVector | IPoint): IPoint;
    minus(b: IPoint): IVector;
    clone(): IPoint;
    equal(b: IPoint, epsilon?: number): boolean;
    notEqual(b: IPoint): boolean;
}

export interface IVector {
    readonly x: number;
    readonly y: number;

    length(): number;
    normalize(): void;
    scale(factor: number): IVector;
    add(b: IVector): IVector;
    invert(): IVector;
    dot(b: IVector): number;
    norm(): number;
    cross(b: IVector | IPoint): number;
    mul(b: number): IVector;
}

export interface ILine {
    readonly s: IPoint;
    readonly t: IPoint;

    reverse(): ILine;
}

export interface ISegment {
    readonly s: IPoint;
    readonly t: IPoint;

    reverse(): ISegment;
    equal(seg: ISegment): boolean;
    notEqual(seg: ISegment): boolean;
}

