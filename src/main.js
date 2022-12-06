import {setupScene, setupCamera, setupRenderer} from './setups/scene.js';
import setupOrbitControls from './setups/orbitControls.js';

/**
 * Holds variables used throughout the program.
 * @type {Object}
 * @property {THREE.Scene} scene
 * @property {THREE.PerspectiveCamera} camera
 * @property {THREE.WebGLRenderer} renderer
 */
export let vars = {};


function main() {
  setupScene();
  setupCamera();
  setupRenderer();
  setupOrbitControls();

  mainLoop();
}

function mainLoop() {
  vars.renderer.render(vars.scene, vars.camera);
  requestAnimationFrame(mainLoop);
}

//Browser events
window.onload = main;