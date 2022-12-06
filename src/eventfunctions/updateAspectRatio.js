import {vars} from '../main.js';

/**
 * Fires when the browser window gets resized. This function gets assigned to the window.onresize property.
 */
export default function updateAspectRatio() {
  vars.camera.aspect = window.innerWidth / window.innerHeight;
  vars.camera.updateProjectionMatrix();
  vars.renderer.setSize(window.innerWidth, window.innerHeight);
}