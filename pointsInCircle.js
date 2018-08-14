function pointsInCircle(points, centerX, centerY, radius) {
  return points.reduce((pointsInside, coord) => {
    if (
      Math.pow(coord.x - centerX, 2) + Math.pow(coord.y - centerY, 2) <
      Math.pow(radius, 2)
    ) {
      return (pointsInside += 1);
    }
    return pointsInside;
  }, 0);
}
