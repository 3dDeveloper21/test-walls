const center = { x: 400, y: 400 };

export function draw(ctx, delta) {
  ctx.fillStyle = "#22ddaa";
  let res = 1000;
  const d = new Date();
  let time = d.getTime();

  let amp = 50 + 10 * Math.sin(time * 0.003);
  for (let i = 0; i < res; i++) {
    let a = (i / res) * 2 * Math.PI + Math.PI;
    let r = 300 + Math.sin((i / res) * 2 * Math.PI * 3) * amp;
    let x = center.x + Math.cos(a) * r;
    let y = center.y + Math.sin(a) * r;

    ctx.beginPath();
    ctx.arc(x, y, 5, 0, Math.PI * 2);
    ctx.fill();
  }
}

export function keypressed(code) {}

export function mousemove(x, y) {}

export function mousedown(x, y) {}
