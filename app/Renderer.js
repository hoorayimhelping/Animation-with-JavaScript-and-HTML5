var Renderer = function(context) {
  var c = context;

  this.clear = function() {
    c.clearRect(0, 0, c.width, c.height);
  };

  this.drawParticle = function(particle) {
    if (!particle.alive) {
      return;
    }
    c.beginPath();
      c.arc(particle.position.x, particle.position.y, particle.radius, 0, Math.PI*2, true);
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