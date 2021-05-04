const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.ConeBufferGeometry(15, 30, 32);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const mesh = new THREE.Mesh(geometry, material);

mesh.scale.x = 0.1;
mesh.scale.y = 0.1;
mesh.scale.z = 0.1;

scene.add(mesh);

camera.position.z = 5;

const animate = function () {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  mesh.rotation.x += 0.005;
  mesh.rotation.y += 0.005;
  mesh.rotation.z += 0.005;
};

animate();
