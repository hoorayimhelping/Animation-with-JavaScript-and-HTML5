var ParticleManager = function() {
  var self = this;
  this.particles = [];

  if (arguments.length === 1) {
    if (typeof arguments[0] === 'number' && arguments[0] > 0) {
      this.particleCount = arguments[0];
    }
  } else {
    this.particleCount = 200;
  }

  for (i = 0; i < this.particleCount; i++) {
    this.particles.push(new Particle());
	this.particles[i].x = 0;
	this.particles[i].y = 0;

	this.particles[i].angle = (90 / this.particleCount) * (i);
	this.particles[i].xSpeed = Math.abs(Math.cos(this.particles[i].angle * (Math.PI/180)));
	this.particles[i].ySpeed = Math.abs(Math.sin(this.particles[i].angle * (Math.PI/180)));
  }

ParticleManager.prototype.update = function() {
    for (i = 0; i < this.particleCount; i++ ) {
	  this.particles[i].update();
    }
  };

ParticleManager.prototype.drawParticles = function(fn) {
    for (i = 0; i < this.particleCount; i++) {
      fn(this.particles[i], i);
    }
  }
};