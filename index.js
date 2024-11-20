// import * as THREE from "three";
// import { OrbitControls } from "jsm/controls/OrbitControls.js";

// const w = window.innerWidth;
// const h = window.innerHeight;
// const renderer = new THREE.WebGLRenderer({ antialias: true });
// renderer.setSize(w, h);
// document.body.appendChild(renderer.domElement);

// const fav = 75;
// const aspect = w / h;
// const far = 10;
// const near = 0.1;
// const camera = new THREE.PerspectiveCamera(fav, aspect, near, far);
// camera.position.z = 2;

// const scene = new THREE.Scene();

// // Orbit Controls for camera interaction
// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;
// controls.dampingFactor = 0.03;

// // Geometry and materials
// const geo = new THREE.IcosahedronGeometry(1.0, 3);
// const mat = new THREE.MeshStandardMaterial({
//   color: 0xffffff,
//   flatShading: true,
// });
// const mesh = new THREE.Mesh(geo, mat);
// scene.add(mesh);

// const wireMat = new THREE.MeshBasicMaterial({
//   color: 0xffffff,
//   wireframe: true,
// });
// const wireMesh = new THREE.Mesh(geo, wireMat);
// wireMesh.scale.setScalar(1.001);
// mesh.add(wireMesh);

// const hemiLight = new THREE.HemisphereLight(0x0099ff, 0xaa5500);
// scene.add(hemiLight);

// // Animation flags
// let rotateFlag = false;
// let scaleFlag = false;

// // Animation loop
// function animate(t = 0) {
//   requestAnimationFrame(animate);

//   // Handle animations
//   if (rotateFlag) {
//     mesh.rotation.y += 0.01;
//     mesh.rotation.x += 0.01;
//   }
//   if (scaleFlag) {
//     const scale = Math.abs(Math.sin(t * 0.001)) + 0.5;
//     mesh.scale.setScalar(scale);
//   }

//   renderer.render(scene, camera);
//   controls.update();
// }
// animate();

// // Button event handlers
// document.getElementById("rotate").addEventListener("click", () => {
//   rotateFlag = !rotateFlag;
// });

// document.getElementById("scale").addEventListener("click", () => {
//   scaleFlag = !scaleFlag;
// });

// document.getElementById("reset").addEventListener("click", () => {
//   rotateFlag = false;
//   scaleFlag = false;
//   mesh.rotation.set(0, 0, 0);
//   mesh.scale.setScalar(1.0);
// });
import * as THREE from "three";
import { OrbitControls } from "jsm/controls/OrbitControls.js";

const w = window.innerWidth;
const h = window.innerHeight;
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(w, h);
document.body.appendChild(renderer.domElement);

const fav = 75;
const aspect = w / h;
const far = 10;
const near = 0.1;
const camera = new THREE.PerspectiveCamera(fav, aspect, near, far);
camera.position.z = 2;

const scene = new THREE.Scene();

// Orbit Controls for camera interaction
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.03;

// Geometry and materials
const geo = new THREE.IcosahedronGeometry(1.0, 3);
const mat = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  flatShading: true,
});
const mesh = new THREE.Mesh(geo, mat);
scene.add(mesh);

const wireMat = new THREE.MeshBasicMaterial({
  color: 0xffffff,
  wireframe: true,
});
const wireMesh = new THREE.Mesh(geo, wireMat);
wireMesh.scale.setScalar(1.001);
mesh.add(wireMesh);

const hemiLight = new THREE.HemisphereLight(0x0099ff, 0xaa5500);
scene.add(hemiLight);

// Animation flags and variables
let rotateFlag = false;
let scaleFlag = false;
let spinSpeed = 1; // Default spin speed

// Animation loop
function animate(t = 0) {
  requestAnimationFrame(animate);

  // Handle animations
  if (rotateFlag) {
    mesh.rotation.y += 0.01 * spinSpeed;
    mesh.rotation.x += 0.01 * spinSpeed;
  }
  if (scaleFlag) {
    const scale = Math.abs(Math.sin(t * 0.001)) + 0.5;
    mesh.scale.setScalar(scale);
  }

  renderer.render(scene, camera);
  controls.update();
}
animate();

// Button event handlers
document.getElementById("rotate").addEventListener("click", () => {
  rotateFlag = !rotateFlag;
});

document.getElementById("scale").addEventListener("click", () => {
  scaleFlag = !scaleFlag;
});

document.getElementById("reset").addEventListener("click", () => {
  rotateFlag = false;
  scaleFlag = false;
  spinSpeed = 1; // Reset spin speed
  document.getElementById("speed").value = spinSpeed; // Reset slider position
  mesh.rotation.set(0, 0, 0);
  mesh.scale.setScalar(1.0);
});

// Spin speed slider handler
document.getElementById("speed").addEventListener("input", (event) => {
  spinSpeed = parseFloat(event.target.value);
});
