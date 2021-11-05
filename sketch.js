let particle;

function setup() {
  createCanvas(400, 400);
  particle = new Particle(width/2, height/2);
}

function draw() {
  background(0);

  let gravity = createVector(0, 0.2);
  particle.applyForce(gravity);
  particle.edges();
  particle.update();
  particle.display();
}
