var Particle = function() {
	var self = this;

	this.x = 50;
	this.y = 50;
	this.xSpeed = 1;
	this.ySpeed = 1;

	this.age = 0;
	this.ageRate = 1;
	this.ageLimit = 100;
	this.alive = false;

	this.fillStyle = '#0032FF';
	this.strokeStyle = '';

	this.type = 'circle'; // possible types might include circle, square, line
	this.radius = 1;

	this.update = function() {
		if (this.alive) {
			if (this.age <= this.ageRate) {

				console.log(this);

				this.x += this.xSpeed;
				this.y += this.ySpeed;
				this.age += this.ageRate;
			} else {
				this.alive = false;
			}
		}
	}
};