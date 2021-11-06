let emitters = [];
// let particles = [];

function mousePressed() {
  emitters.push(new Emitter(mouseX, mouseY));
  emitters.update_color();
}

function setup() {
  createCanvas(400, 400);
  emitters[0] = new Emitter(200, 20);
}

function draw() {
  background(0);

  for(let emitter of emitters) {
    emitter.emit(5);
    emitter.update();
    emitter.display();
  }
}
