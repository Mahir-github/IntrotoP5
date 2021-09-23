function preload() {

}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
    tint_color = "";
}

function draw() {
    image(video, 230, 150, 220, 200);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(40, 40, 80);
    circle(40, 435, 80);
    circle(595, 435, 80);
    circle(595, 40, 80);
    fill(0, 255, 0);
    stroke(0, 255, 0);
    rect(80, 40, 480, 20)
    rect(80, 420, 480, 20)
    rect(30, 80, 25, 320)
    rect(585, 80, 25, 320)
}

function take_snapshot() {
    save('name.png');
}

function filter_tint() {
    tint_color = document.getElementById('colour_name').value; 
}