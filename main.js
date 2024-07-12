import { draw, keypressed } from "./lib/draw";

const canvas = document.querySelector("canvas");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);
window.addEventListener("keypress", (event) => keypressed(event.code));

let lastFrameTime = 0;
function loop(time) {
  const delta = time - lastFrameTime;
  lastFrameTime = time;
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  draw(ctx, delta);
  window.requestAnimationFrame(loop);
}
loop();
