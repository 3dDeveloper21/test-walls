import { Vector2 } from "three";

export function getLinePoints(start, end, thickness) {
  const mainVector = new Vector2(end.x - start.x, end.y - start.y);
  const normalized = mainVector.normalize();
  const perp = new Vector2(-normalized.y, normalized.x);
  const htv = perp.setLength(thickness / 2); // halfThicknessVector
  const v1 = new Vector2(start.x + htv.x, start.y + htv.y);
  const v2 = new Vector2(end.x + htv.x, end.y + htv.y);
  const v3 = new Vector2(end.x - htv.x, end.y - htv.y);
  const v4 = new Vector2(start.x - htv.x, start.y - htv.y);
  return [v1, v2, v3, v4];
}
