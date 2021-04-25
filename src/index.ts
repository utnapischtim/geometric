export { lineAngle, segmentAngleSegment } from "./lines/lineAngle";
export { lineInterpolate } from "./lines/lineInterpolate";
export { lineLength, distance } from "./lines/lineLength";
export { lineMidpoint } from "./lines/lineMidpoint";

export { pointRotate } from "./points/pointRotate";
export { pointTranslate } from "./points/pointTranslate";

export { polygonArea } from "./polygons/polygonArea";
export { polygonBounds } from "./polygons/polygonBounds";
export { polygonCentroid } from "./polygons/polygonCentroid";
export { polygonHull } from "./polygons/polygonHull";
export { polygonLength } from "./polygons/polygonLength";
export { polygonMean } from "./polygons/polygonMean";
export { polygonRegular } from "./polygons/polygonRegular";
export { polygonRotate } from "./polygons/polygonRotate";
export { polygonScale } from "./polygons/polygonScale";
export { polygonScaleX } from "./polygons/polygonScaleX";
export { polygonScaleY } from "./polygons/polygonScaleY";
export { polygonTranslate } from "./polygons/polygonTranslate";

export { lineIntersectsLine, intersection } from "./relationships/lineIntersectsLine";
export { sharePoint } from "./relationships/lineIntersectsLine";
export { lineIntersectsPolygon } from "./relationships/lineIntersectsPolygon";
export { pointInPolygon } from "./relationships/pointInPolygon";
export { pointOnPolygon } from "./relationships/pointOnPolygon";
export { pointLeftofLine, pointRightofLine, pointOnLine, pointWithLine } from "./relationships/pointOnLine";
export { polygonInPolygon } from "./relationships/polygonInPolygon";
export { polygonIntersectsPolygon } from "./relationships/polygonIntersectsPolygon";
export { angleBisector, isReflex, isConvex } from "./relationships/angle";

export { angleReflect } from "./angles/angleReflect";
export { angleToDegrees } from "./angles/angleToDegrees";
export { angleToRadians } from "./angles/angleToRadians";

export { Point } from "./types/Point";
export { Line } from "./types/Line";
export { Vector } from "./types/Vector";
export { Segment } from "./types/Segment";

export { close } from "./utils/closePolygon";
export { cross } from "./utils/crossProduct";

export type { IVector, ISegment, ILine, IPoint } from "./interfaces";
