import * as DATGUI from 'datgui';

import {vars} from '../main.js';
import {onChangeWindSpeed, onChangeWindDirection, onChangeSunPosition} from '../eventfunctions/guiOnChange.js';

const windSpeedMin = 0;
const windSpeedMax = 100;

/**
 * Setups the GUI.
 */
export default function setupGUI() {
  const gui = new DATGUI.GUI();
  const proxy = {
    Wind_Speed: 0, //in km/h
    Wind_Direction: 0, //in degrees
    Sun_PositionX: 0,
  };

  gui.add(proxy, 'Wind_Speed', windSpeedMin, windSpeedMax, 1).onChange(onChangeWindSpeed);
  gui.add(proxy, 'Wind_Direction', 0, 359, 1).onChange(onChangeWindDirection);
  gui.add(proxy, 'Sun_PositionX', -300, 300, 1).onChange(onChangeSunPosition);
}