var Particle = function() {
  var self = this;

  this.x = 50;
  this.y = 50;
  this.xSpeed = 1;
  this.ySpeed = 1;

  this.age = 0;
  this.ageRate = 1;
  this.ageLimit = 100;
  this.alive = true;

  this.fillStyle = '#0032FF';
  this.radius = 2;
};

Particle.prototype.update = function() {
  if (this.alive) {
    if (this.age <= this.ageLimit) {
      this.x += this.xSpeed;
      this.y += this.ySpeed;
      this.age += this.ageRate;
    } else {
      this.alive = false;
    }
  }
};