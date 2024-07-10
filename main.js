import { getLinePoints } from "./line";
import "./style.css";
import * as THREE from "three";

const webglCanvas = document.querySelector(".webgl");

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({
  canvas: webglCanvas,
  antialias: true,
});
renderer.setPixelRatio(2);
renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.setAnimationLoop(loop);
// document.body.appendChild( renderer.domElement );

let point1 = new THREE.Vector2(-2, 0);
let point2 = new THREE.Vector2(3, 3);
let thickness = 0.1;

const points = getLinePoints(point1, point2, thickness);

const shape = new THREE.Shape();
shape.moveTo(points[0].x, points[0].y);
shape.lineTo(points[1].x, points[1].y); // Line to next point
shape.lineTo(points[2].x, points[2].y); // Line to next point
shape.lineTo(points[3].x, points[3].y); // Line to next point
shape.lineTo(points[0].x, points[0].y);

const geometry = new THREE.ShapeGeometry(shape);
const material = new THREE.MeshBasicMaterial();

camera.position.z = 5;

const line = new THREE.Mesh(geometry, material);
scene.add(line);

let lastTimeMs = 0;
function loop(timeMs) {
  const deltaTimeMs = timeMs - lastTimeMs;
  lastTimeMs = timeMs;
  point1.y += 0.01;
  renderer.render(scene, camera);
  window.requestAnimationFrame(loop);
}
loop(0);
