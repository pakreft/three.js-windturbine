import * as THREE from 'three';

import {vars} from '../main.js';
import Ground from '../objects/ground.js';
import WindTurbine from '../objects/windturbine/windTurbine.js';

const posWindTurbine = new THREE.Vector3(0, 0, 0);
const rotWindTurbine = new THREE.Euler(0, 0, 0);

export default function addObjects() {
  // Ground
  vars.scene.add(new Ground());

  // Wind Turbine
  vars.windturbine = new WindTurbine(posWindTurbine, rotWindTurbine);
  vars.scene.add(vars.windturbine);
}