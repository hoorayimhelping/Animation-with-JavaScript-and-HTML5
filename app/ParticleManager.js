var ParticleManager = function() {
  this.particles = [];
  this.gravity = .3;
  this.bounds = { x: 0, y: 0 };
  this.friction = .4;

  if (arguments.length === 1) {
    if (typeof arguments[0] === 'number' && arguments[0] > 0) {
      this.particleCount = arguments[0];
    }
  } else {
    this.particleCount = 200;
  }
};

ParticleManager.prototype.initialize = function(origin) {
  this.particles = [];
  for (i = 0; i < this.particleCount; i++) {
    this.particles.push(new Particle());
    this.particles[i].x = origin.x;
    this.particles[i].y = origin.y;
    this.particles[i].age = 0;
    this.particles[i].verticalBounces = 0;

    this.particles[i].angle = (360 / this.particleCount) * i;

    this.particles[i].xSpeed = (Math.random() * 20) - 10;
    this.particles[i].ySpeed = (Math.random() * 20) - 10;

    if (this.particles[i].angle >= 90 && this.particles[i].angle < 180) {
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
    if (this.particles[i].x >= this.bounds.x || this.particles[i].x <= 0) {
      this.particles[i].xSpeed = -this.particles[i].xSpeed * this.friction;
    }
    if (this.particles[i].y >= this.bounds.y || this.particles[i].y <= 0) {
      this.particles[i].verticalBounces++;
      this.particles[i].ySpeed = -this.particles[i].ySpeed * this.friction;
    }
    this.particles[i].update();
    this.particles[i].ySpeed -= this.gravity;
  }
};

ParticleManager.prototype.drawParticles = function(fn) {
  for (var i = 0; i < this.particleCount; i++) {
    fn(this.particles[i], i);
  }
};