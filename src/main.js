import * as THREE from "three";
import { Renderer } from "./components/Renderer";
import { Camera } from "./components/Camera";
import { player } from "./components/Player";
import "./style.css";

//Create variables
const scene = new THREE.Scene();
const camera = Camera();
const renderer = Renderer();
const ambientLight = new THREE.AmbientLight();
const dirLight = new THREE.DirectionalLight();
//const camera = new THREE.PerspectiveCamera();

//Initialse
scene.add(player);
scene.add(camera);
scene.add(ambientLight);
dirLight.position.set(-100, -100, 200);
scene.add(dirLight);
renderer.render(scene, Camera.camera);
