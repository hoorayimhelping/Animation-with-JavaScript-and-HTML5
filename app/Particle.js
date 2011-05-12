var Particle = function() {
  var self = this;

  this.x = 0;
  this.y = 0;
  this.xSpeed = 0;
  this.ySpeed = 0;

  this.angle = 0.0;

  this.age = 0;
  this.ageRate = 1;
  this.ageLimit = 1000;
  this.alive = true;

  this.fillStyle = '#0032FF';
  this.radius = 2;
};

Particle.prototype.update = function() {
  if (this.alive) {
    if (this.age <= this.ageLimit) {
      this.previousX = this.x;
      this.previousY = this.y;
      this.x += this.xSpeed;
      this.y += this.ySpeed;
      this.age += this.ageRate;
    } else {
      this.alive = false;
    }
  }
};