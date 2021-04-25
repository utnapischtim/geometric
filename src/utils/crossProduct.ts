import type { IPoint } from "../interfaces";

// See https://en.wikibooks.org/wiki/Algorithm_Implementation/Geometry/Convex_hull/Monotone_chain#JavaScript
// and https://math.stackexchange.com/questions/274712/calculate-on-which-side-of-a-straight-line-is-a-given-point-located
export function cross(a: IPoint, b: IPoint, o: IPoint): number {
    return (a.x - o.x) * (b.y - o.y) - (a.y - o.y) * (b.x - o.x);
}


// export function cross(p: Point, a: Point, b: Point): number {
//     // console.log("cross p: ", p, " a: ", a, " b: ", b);
//     // console.log("cross: (p.x - a.x): ", (p.x - a.x), " (b.y - a.y): ", (b.y - a.y), " (p.y - a.y): ", (p.y - a.y), " (b.x - a.x): ", (b.x - a.x));
//     return (p.x - a.x) * (b.y - a.y) - (p.y - a.y) * (b.x - a.x);
// }
