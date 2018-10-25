import Stats from '../lib/index';

let stats = new Stats(Stats.POSITION.BOTTOM_LEFT);


let cvs = document.createElement("canvas");
let ctx = cvs.getContext("2d");

cvs.width = 800;
cvs.height = 800;

document.body.appendChild(cvs);

let i = 0;

function update () {
  window.requestAnimationFrame(update);

  stats.begin();
  ctx.clearRect(0,0,800,800);
  i++;
  ctx.fillStyle = "blue";
  ctx.fillRect(Math.cos(i/100)*300+300, Math.sin(i/100)*300+300, 50, 50);
  ctx.fillRect(Math.cos(i/100 - Math.PI)*300+300, Math.sin(i/100-Math.PI)*300+300, 50, 50);
  stats.end();
}

update();