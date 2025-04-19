import * as THREE from "three";

export function Renderer() {
  const canvas = document.querySelector("canvas.game");
  if (!canvas) {
    throw new Error("No game canvas found");
  }
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
    alpha: true,
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);

  return renderer;
}
