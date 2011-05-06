var Renderer = function(context) {
	var	self = this,
			c = context;

	this.drawParticle = function(particle) {
		if (!particle.alive) {
			return;
		}

		// assume at this point, the type is a circle
		c.clearRect(0, 0);
		c.beginPath();
			c.arc(particle.x, particle.y, particle.radius, 0, Math.PI*2, true);
		c.closePath();

		if (particle.hasOwnProperty('fillStyle') && particle.fillStyle !== '') {
			c.fillStyle = particle.fillStyle;
			c.fill();
		}

		if (particle.hasOwnProperty('strokeStyle') && particle.strokeStyle !== '') {
			c.strokeStyle = particle.strokeStyle;
			c.stroke();
		}
	};
};