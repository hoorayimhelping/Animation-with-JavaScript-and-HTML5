var ParticleManager = function() {
  var self = this;
  this.particles = [];
  this.particleCount = 200;

  if (arguments.length === 1) {
    if (typeof arguments[0] === 'number' && arguments[0] > 0) {
      this.particleCount = arguments[0];
    }
  }

  this.initializeParticles = function() {
    for (i = 0; i < this.particleCount; i++) {
      var newLength = this.particles.push(new Particle());
    }
  };

  this.update = function() {
    for (i = 0; i < this.particleCount; i++ ) {
      this.particles[i].update();
    }
  };

  this.drawParticles = function(fn) {
    for (i = 0; i < this.particleCount; i++) {
      fn(this.particles[i]);
    }
  }
};