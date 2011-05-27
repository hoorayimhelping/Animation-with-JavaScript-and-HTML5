var ParticleManager = function(count) {
  this.particles = [];
  this.bounds = { x: 0, y: 0 };
  this.origin = { x: 0, y: 0 };

  if (typeof count === 'number' && count > 0) {
    this.particleCount = count;
  } else {
    this.particleCount = 200;
  }
};

ParticleManager.prototype.initialize = function(origin) {
  this.friction = .4;
  this.gravity = .3;
  this.particles = [];

  this.create(origin);
};

ParticleManager.prototype.create = function() {
	for (i = 0; i < this.particleCount; i++) {
	    this.particles.push(new Particle());
	    this.particles[i].position.x = this.origin.x;
	    this.particles[i].position.y = this.origin.y;
	    this.particles[i].age = 0;
	    this.particles[i].verticalBounces = 0;

	    this.particles[i].angle = (360 / this.particleCount) * i;

	    this.particles[i].velocity.x = (Math.random() * 20) - 10;
	    this.particles[i].velocity.y = (Math.random() * 20) - 10;

	    if (this.particles[i].angle >= 90 && this.particles[i].angle < 180) {
	      this.particles[i].velocity.y = -this.particles[i].velocity.y;
	    } else if (this.particles[i].angle >= 180 && this.particles[i].angle < 270) {
	      this.particles[i].velocity.y = -this.particles[i].velocity.y;
	      this.particles[i].velocity.x = -this.particles[i].velocity.x;
	    } else if (this.particles[i].angle >= 270 && this.particles[i].angle < 360) {
	      this.particles[i].velocity.x = -this.particles[i].velocity.x;
	    }
	  }
}

ParticleManager.prototype.update = function() {
  for (var i = 0; i < this.particleCount; i++ ) {
    if (this.particles[i].position.x >= this.bounds.x || this.particles[i].position.x <= 0) {
      this.particles[i].velocity.x = -this.particles[i].velocity.x * this.friction;
    }
    if (this.particles[i].position.y >= this.bounds.y || this.particles[i].position.y <= 0) {
      this.particles[i].verticalBounces++;
      this.particles[i].velocity.y = -this.particles[i].velocity.y * this.friction;
    }
    this.particles[i].update();
    this.particles[i].velocity.y -= this.gravity;
  }
};

ParticleManager.prototype.drawParticles = function(fn) {
  for (var i = 0; i < this.particleCount; i++) {
    fn(this.particles[i], i);
  }
};