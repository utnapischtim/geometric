// Returns the angle of reflection given an angle of incidence and a surface angle.
export function angleReflect(incidenceAngle: number, surfaceAngle: number): number {
    const a: number = surfaceAngle * 2 - incidenceAngle;
    return a >= 360 ? a - 360 : a < 0 ? a + 360 : a;
}
