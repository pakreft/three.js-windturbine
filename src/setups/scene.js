import * as THREE from 'three';

import {vars} from '../main.js';

// Camera
export const lookAt = new THREE.Vector3(0, 0, 0);
const startingPos = new THREE.Vector3(0, 0, 20);
const fov = 45;
const nearPlane = 0.1;
const farPlane = 1000;

// Renderer
const backgroundColor = 0xffffff;

/**
 * Setups the scene.
 */
export function setupScene() {
  vars.scene = new THREE.Scene();
  vars.scene.add(new THREE.AxesHelper(30)); //Adds xyz-axes for visualisation to the scene
}

/**
 * Setups a perspective camera.
 */
export function setupCamera() {
  vars.camera = new THREE.PerspectiveCamera(fov, window.innerWidth / window.innerHeight, nearPlane, farPlane);
  vars.camera.position.set(startingPos.x, startingPos.y, startingPos.z);
}

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