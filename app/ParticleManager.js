var ParticleManager = function() {
  this.particles = [];

  if (arguments.length === 1) {
    if (typeof arguments[0] === 'number' && arguments[0] > 0) {
      this.particleCount = arguments[0];
    }
  } else {
    this.particleCount = 200;
  }
};

ParticleManager.prototype.initialize = function(origin) {
  for (i = 0; i < this.particleCount; i++) {
    this.particles.push(new Particle());
    this.particles[i].x = origin.x;
    this.particles[i].y = origin.y;
    this.particles[i].age = 0;

    this.particles[i].angle = (360 / this.particleCount) * (i);
    this.particles[i].xSpeed = Math.abs(Math.cos(this.particles[i].angle * (Math.PI/180))) * 3;
    this.particles[i].ySpeed = Math.abs(Math.sin(this.particles[i].angle * (Math.PI/180))) * 3;

    if (this.particles[i].angle >= 0 && this.particles[i].angle < 90) {

    } else if (this.particles[i].angle >= 90 && this.particles[i].angle < 180) {
      this.particles[i].ySpeed = -this.particles[i].ySpeed;
    } else if (this.particles[i].angle >= 180 && this.particles[i].angle < 270) {
      this.particles[i].ySpeed = -this.particles[i].ySpeed;
      this.particles[i].xSpeed = -this.particles[i].xSpeed;
    } else if (this.particles[i].angle >= 270 && this.particles[i].angle < 360) {
      this.particles[i].xSpeed = -this.particles[i].xSpeed;
    }
  }
};

ParticleManager.prototype.update = function() {
  for (var i = 0; i < this.particleCount; i++ ) {
    this.particles[i].update();
  }
};

ParticleManager.prototype.drawParticles = function(fn) {
  for (var i = 0; i < this.particleCount; i++) {
    fn(this.particles[i], i);
  }
};