var Particle = function() {
  this.x = 0;
  this.y = 0;
  this.xSpeed = 0;
  this.ySpeed = 0;

  this.angle = 0.0;

  this.age = 0;
  this.ageRate = 1;
  this.ageLimit = 700;
  this.alive = true;

  this.fillStyle = '#0032FF';
  this.radius = 2;
};

Particle.prototype.update = function() {
  if (this.alive) {
    if (this.age <= this.ageLimit) {
      this.x -= this.xSpeed;
      this.y -= this.ySpeed;
      this.age += this.ageRate;
    } else {
      this.die();
    }
  }
};

Particle.prototype.die = function() {
	this.alive = false;
};

Particle.prototype.spawn = function() {
	this.alive = true;
	this.age = 0;
};