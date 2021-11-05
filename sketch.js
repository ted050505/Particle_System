let particles = [];

function setup() {
  createCanvas(400, 400);
  for(let i=0;i<100;i++) {
    particles.push(new Particle(width/2, height/2));
  }
}

function draw() {
  background(0);

  for(let particle of particles) {
    let gravity = createVector(0, 0.2);
    particle.applyForce(gravity);
    particle.edges();
    particle.update();
    particle.display();
  }
}
