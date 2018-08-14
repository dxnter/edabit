function isCircleCollision(c1, c2) {
  return c1[0] + c2[0] > Math.hypot(c2[2] - c1[2], c2[1] - c1[1]);
}
