const startPoint = { x: 10, y: 10 };

export function draw(ctx, delta) {
  ctx.fillStyle = "#22ddaa";
  ctx.beginPath();
  ctx.moveTo(startPoint.x, startPoint.y);
  ctx.lineTo(500, 40);
  ctx.lineTo(500, 530);
  ctx.lineTo(10, 490);
  ctx.closePath();
  ctx.fill();
}

export function keypressed(code) {
  console.log(code);
  startPoint.x += 5;
}
