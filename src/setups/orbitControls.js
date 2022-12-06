import * as CONTROLS from 'controls';

import {vars} from '../main.js';
import {lookAt} from './scene.js';

/**
 * Setups OrbitControls for the camera.
 */
export default function setupOrbitControls() {
  const orbitControls = new CONTROLS.OrbitControls(vars.camera, vars.renderer.domElement);
  orbitControls.target = lookAt;
  orbitControls.update();
}