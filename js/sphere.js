const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  10000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
// document.getElementById("threejs").appendChild(renderer.domElement);

const geometry = new THREE.SphereGeometry(20, 64, 64);

const material = new THREE.MeshNormalMaterial();

const mesh = new THREE.Mesh(geometry, material);

mesh.scale.x = 0.1;
mesh.scale.y = 0.1;
mesh.scale.z = 0.1;

scene.add(mesh);

camera.position.z = 5;

const animate = function () {
  requestAnimationFrame(animate);

  mesh.rotation.x += 0.005;
  mesh.rotation.y += 0.005;
  mesh.rotation.z += 0.005;

  renderer.render(scene, camera);
};

animate();
