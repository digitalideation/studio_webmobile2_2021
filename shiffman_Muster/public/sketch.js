var socket;
function setup() {
    createCanvas(700, 700);
    socket=io.connect("http://localhost:3000/");
    //socket=io.connect("http://10.147.112.253:3000/");
    socket.on('mouse', newDrawing);
    background(255);
}

function newDrawing(data){
    fill(255,0,0);
    ellipse(data.x, data.y, 10,10);
}

function mouseDragged(){
    fill(0);
    var data={
        x:mouseX,
        y:mouseY
    }
    socket.emit('mouse', data);
    ellipse(mouseX, mouseY, 10,10);
}

function draw() {
    //background(255);

    //rect(50,50,100,100);

}

