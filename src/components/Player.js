import * as THREE from "three";

export const player = Player();
function Player() {
  const body = new THREE.Mesh(
    new THREE.BoxGeometry(15, 15, 20),
    new THREE.MeshStandardMaterial({
      color: "#00ff00",
      flatShading: true,
      transparent: true,
      opacity: 0.5,
    })
  );
  body.position.z = 10;

  return body;
}
