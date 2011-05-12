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
	this.particles[i].x = 100;
	this.particles[i].y = 100;

	this.particles[i].angle = (360 / this.particleCount) * (i);
	this.particles[i].xSpeed = Math.abs(Math.cos(this.particles[i].angle * (Math.PI/180)));
	this.particles[i].ySpeed = Math.abs(Math.sin(this.particles[i].angle * (Math.PI/180)));

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