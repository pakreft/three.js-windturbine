import * as THREE from 'three';

import Tower from './tower.js';

export default class WindTurbine extends THREE.Group  {

  constructor(pos, rot) {
    super();

    this.tower = new Tower(new THREE.Vector3(0, 0, 0));

    this.add(this.tower);

    this.position.set(pos.x, pos.y, pos.z);
    this.setRotationFromEuler(rot);
  }

}