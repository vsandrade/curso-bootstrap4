var canvas1 = document.getElementById('beerCanvas');
var canvas2 = document.getElementById('beerCanvas2');
var ctx1 = canvas1.getContext('2d');
var ctx2 = canvas2.getContext('2d');
var particles1 = [];
var particles2 = [];
var particleCount = 320;

for (var i = 0; i < particleCount; i++) {
  particles1.push(new particle(canvas1));
  particles2.push(new particle(canvas2));
}

function particle(canvas) {
  this.x = Math.random() * canvas.width;
  this.y = canvas.height + Math.random() * 300;
  this.speed = 1 + Math.random();
  this.radius = Math.random() * 3;
  this.opacity = (Math.random() * 100) / 1000;
}

function loop() {
  requestAnimationFrame(loop);
  draw(particles1, ctx1, canvas1);
  draw(particles2, ctx2, canvas2);
}

function draw(particles, ctx, canvas) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.globalCompositeOperation = 'lighter';
  for (var i = 0; i < particles.length; i++) {
    var p = particles[i];
    ctx.beginPath();
    ctx.fillStyle = 'rgba(255,255,255,' + p.opacity + ')';
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2, false);
    ctx.fill();
    p.y -= p.speed;
    if (p.y <= -10)
      particles[i] = new particle(canvas);
  }
}
loop();

$(window).scroll(function() {
  /* depois de rolar 100px */
  if ($(document).scrollTop() > 100) {
    $('.navbar').addClass('affix');
  } else {
    $('.navbar').removeClass('affix');
  }
});