let emitter;
// let particles = [];

function setup() {
  createCanvas(400, 400);
  emitter = new Emitter(200, 20);
}

function draw() {
  background(0);

  emitter.emit(5);

  emitter.update();
  emitter.display();
}
