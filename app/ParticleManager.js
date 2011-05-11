var ParticleManager = function() {
  var self = this;
  this.particles = [];
  this.particleCount = 200;

  if (arguments.length === 1) {
    if (typeof arguments[0] === 'number' && arguments[0] > 0) {
      this.particleCount = arguments[0];
    }
  }

  for (i = 0; i < this.particleCount; i++) {
    this.particles.push(new Particle());
	this.particles[i].x = (i + 2) * 10;
	this.particles[i].y = (this.particles[i].x / 2) + 10;
  }

ParticleManager.prototype.update = function() {
    for (i = 0; i < this.particleCount; i++ ) {
      this.particles[i].update();
    }
  };

ParticleManager.prototype.drawParticles = function(fn) {
    for (i = 0; i < this.particleCount; i++) {
      fn(this.particles[i]);
    }
  }
};