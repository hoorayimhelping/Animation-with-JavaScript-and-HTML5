var FountainManager = function() {};
FountainManager.prototype = new ParticleManager();
FountainManager.prototype.parent = ParticleManager.prototype;
FountainManager.prototype.constructor = FountainManager;
FountainManager.NewVelocity = function() {
	return {x: (Math.random() * 5) - 3, y: (Math.random() * 25) - 10 };
}

FountainManager.prototype.create = function() {
	for (i = 0; i < this.particleCount; i++) {
		var particle = new Particle();
		particle.position.x = this.origin.x;
		particle.position.y = this.origin.y
		particle.age = 0;
		particle.ageRate = (Math.random() * 5) + 1;
		particle.verticalBounces = 0;
		particle.ageLimit = (Math.random() * 425) + 1;
		particle.angle = (180 / this.particleCount) * i;
		particle.velocity = FountainManager.NewVelocity();

		if (particle.angle >= 270 && particle.angle < 360) {
		  particle.velocity.x = -particle.velocity.x;
		}

		if (i % 4 === 0) {
			particle.die();
		}

		this.particles.push(particle);
	}
};

FountainManager.prototype.update = function() {
	for (var i = 0; i < this.particleCount; i++ ) {
		if (!this.particles[i].alive) {
			this.particles[i].spawn();
			this.particles[i].position.x = this.origin.x;
			this.particles[i].position.y = this.origin.y;
			this.particles[i].velocity = FountainManager.NewVelocity();
			continue;
		}

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