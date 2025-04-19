import * as THREE from "three";
import { Render } from "./components/Render";
import { Camera } from "./components/Camera";
import { Scene } from "./components/Scene";
import { player } from "./components/Player";
import "./style.css";

//Create variables
const scene = new THREE.Scene();
const camera = Camera();
const renderer = Renderer();
//const camera = new THREE.PerspectiveCamera();

//Initialse
scene.add(player);
scene.add(camera);
renderer.render(scene, Camera.camera);
