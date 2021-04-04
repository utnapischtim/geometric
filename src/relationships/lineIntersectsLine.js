// Determines if lineA intersects lineB. 
// See: https://stackoverflow.com/questions/9043805/test-if-two-lines-intersect-javascript-function/24392281#24392281
// Returns a boolean.
export function lineIntersectsLine(lineA, lineB) {
  // First test to see if the lines share an endpoint
  if (sharePoint(lineA, lineB)) return true;

  let a = lineA[0][0],
      b = lineA[0][1],
      c = lineA[1][0],
      d = lineA[1][1],
      p = lineB[0][0],
      q = lineB[0][1],
      r = lineB[1][0],
      s = lineB[1][1],
      det, gamma, lambda;

  det = (c - a) * (s - q) - (r - p) * (d - b);
  if (det === 0) {
    return false;
  } else {
    lambda = ((s - q) * (r - a) + (p - r) * (s - b)) / det;
    gamma = ((b - d) * (r - a) + (c - a) * (s - b)) / det;
    return (0 < lambda && lambda < 1) && (0 < gamma && gamma < 1);
  }
}

export function sharePoint(lineA, lineB){
  let share = false;
  for (let i = 0; i < 2; i++){
    for (let j = 0; j < 2; j++){
      if (equal(lineA[i], lineB[j])){
        share = true;
        break;
      }
    }
  }
  return share;
}

function equal(pointA, pointB){
  return pointA[0] === pointB[0] && pointA[1] === pointB[1];
}
