import * as THREE from "three";

export function Camera() {
  const camera = new THREE.OrthographicCamera();
  const size = 300;
  const viewRatio = window.innerWidth / window.innerHeight;
  const width = viewRatio < 1 ? size : viewRatio * size;
  const height = viewRatio < 1 ? size / viewRatio : size;
  camera.left = -width / 2; //Left
  camera.right = width / 2; //Right
  camera.bottom = -height / 2; //Bottom
  camera.top = height / 2; //Top

  camera.up.set(0, 0, 1);
  camera.position.set(300, -300, 300);
  camera.lookAt(0, 0, 0); //Look at center of scene

  return camera;
}
