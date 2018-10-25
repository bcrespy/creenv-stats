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
  /**
   * display a stats box which is able to monitore the application through 3 layers: frames per second, render time of a frame,
   * memory usage 
   * 
   * @param {?number} position the position of the stats element. use Stats.POSITION.
   * @param {?boolean} visible weither or not thre element is visible at first 
   */
  constructor (position = Stats.TOP_LEFT, visible = true) {
    super(visible);
    this.stats = new StatsJS();
    document.body.appendChild(this.stats.dom);

    switch (position) {
      case Stats.POSITION.TOP_RIGHT: 
        this.stats.dom.style.left = "auto";
        this.stats.dom.style.right = 0;
        break;
      case Stats.POSITION.BOTTOM_RIGHT: 
        this.stats.dom.style.left = "auto";
        this.stats.dom.style.right = 0;
        this.stats.dom.style.top = "auto";
        this.stats.dom.style.bottom = 0;
        break;
      case Stats.POSITION.BOTTOM_LEFT:
        this.stats.dom.style.top = "auto";
        this.stats.dom.style.bottom = 0;
        break;
    }
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

Stats.POSITION = {
  TOP_LEFT: 0,
  TOP_RIGHT: 1,
  BOTTOM_RIGHT: 2,
  BOTTOM_LEFT: 3
}

export default Stats;