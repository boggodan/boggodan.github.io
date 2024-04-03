let port = 8000;
let socket;

function setup() {
  createCanvas(400, 400);
  
  socket = new osc.WebSocketPort({
    url: 'ws://192.168.0.27:8000'
  });
  
  socket.on('message', handleOsc);
  
  socket.open();
}

function draw() {
  background(220);
}

function mouseMoved() {
  let normX = map(mouseX, 0, width, 0, 1);

  socket.send({
    address: '/cube/x',
    args: [normX]
  });
}

function handleOsc(msg) {
  
  if (msg.address === '/1/fader1') {
  } else if (msg.address === '/1/fader2') {
  } else if (msg.address === '/1/fader3') {
  } else if (msg.address === '/1/fader4') {
  }
}