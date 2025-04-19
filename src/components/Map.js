import * as THREE from "three";
import { Gras } from "./Gras";

export class Map {
  constructor() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, 0.5, 0.1, 1000);
    this.camera.position.set(0, 100, 100);
    this.camera.lookAt(this.scene.position);
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(500, 500);
  }
  render() {
    this.renderer.render(this.scene, this.camera);
  }
}
