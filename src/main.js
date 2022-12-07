import {setupScene, setupCamera, setupRenderer} from './setups/scene.js';
import setupOrbitControls from './setups/orbitControls.js';
import setupGUI from './setups/gui.js';
import addObjects from './setups/objects.js';

import updateAspectRatio from './eventfunctions/updateAspectRatio.js';

/**
 * Holds variables used throughout the program.
 * @type {Object}
 * @property {THREE.Scene} scene
 * @property {THREE.PerspectiveCamera} camera
 * @property {THREE.WebGLRenderer} renderer
 * @property {WindTurbine} windturbine //TODO: define jsdoc type
 */
export let vars = {};


function main() {
  setupScene();
  setupCamera();
  setupRenderer();
  setupOrbitControls();
  setupGUI();

  addObjects();

  mainLoop();
}

function mainLoop() {
  vars.renderer.render(vars.scene, vars.camera);
  requestAnimationFrame(mainLoop);
}

// Browser events
window.onload = main;
window.onresize = updateAspectRatio;