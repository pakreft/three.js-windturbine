import * as THREE from 'three';

import {vars} from '../main.js';

/**
 * Setups the scene.
 */
export function setupScene() {
  vars.scene = new THREE.Scene();
  vars.scene.add(new THREE.AxesHelper(30)); //Adds xyz-axes for visualisation to the scene
}

const startingPos = new THREE.Vector3(0, 0, 20);
const fov = 45;
const nearPlane = 0.1;
const farPlane = 1000;

/**
 * Setups a perspective camera.
 */
export function setupCamera() {
  vars.camera = new THREE.PerspectiveCamera(fov, window.innerWidth / window.innerHeight, nearPlane, farPlane);
  vars.camera.position.set(startingPos.x, startingPos.y, startingPos.z);
}

const backgroundColor = 0xffffff;

/**
 * Setups a WebGL renderer.
 */
export function setupRenderer() {
  vars.renderer = new THREE.WebGLRenderer({antialias: true});
  vars.renderer.setSize(window.innerWidth, window.innerHeight);
  vars.renderer.setClearColor(backgroundColor);
  vars.renderer.shadowMap.enabled = true;

  document.getElementById('3d_content').appendChild(vars.renderer.domElement);
}