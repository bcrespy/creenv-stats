/**
 * @license MIT
 * @author Baptiste Crespy <baptiste.crespy@gmail.com>
 * 
 * @credits 
 * Mr.Doob - stats.js 
 * All the contributors of stats.js
 * [https://github.com/mrdoob/stats.js]
 * 
 * This class provides a wrapper for @MrDoob library stats.js
 * Its required to wrap it so that it can be included to the @creenv/hud and 
 * respond to the hud
 **/

import StatsJS from 'stats.js';
import HUDElement from '@creenv/hud-element';

class Stats extends HUDElement {
  constructor (visible = true) {
    super(visible);
    this.stats = new StatsJS();
    document.body.appendChild(this.stats.dom);
  }

  show (toggle) {
    super.show(toggle);
    this.stats.dom.style.display = this.visible ? "block" : "none";
  }

  /**
   * starts the statistics monitoring 
   */
  begin () {
    this.stats.begin();
  }

  /**
   * ends the statistics monitoring 
   */
  end () {
    this.stats.end();
  }
}

export default Stats;