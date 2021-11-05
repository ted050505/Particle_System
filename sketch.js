let particles = [];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);

  for(let i=0;i<1;i++) {
    particles.push(new Particle(width/2, height/2));
  }

  for(let particle of particles) {
    let gravity = createVector(0, 0.2);
    particle.applyForce(gravity);
    particle.edges();
    particle.update();
    particle.display();
  }

  for(let i = particles.length-1; i >= 0; i--) {
    if(particles[i].finshed()) {
      particles.splice(i, 1);)
    }
  }

}
