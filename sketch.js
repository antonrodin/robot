var player;
var enems = [];
var grs = [];

function setup() {
	createCanvas(600, 400);
	player = new Robot();
	enems.push(new Pacman());

	//Create 50 grass
	for(var i = 0; i <= 50; i++){
        grs.push(new Grass(random(width)));
    }
}

function draw() {
	background(225);

	//Draw Grass
    if (frameCount % 10 == 0) {
        grs.push(new Grass(width));
    }

    for (var i = grs.length - 1; i >= 0; i--) {
        grs[i].draw();
        grs[i].update();

        if (grs[i].offscreen()) {
            grs.splice(i, 1);
        }
    }

	fill(0);
	stroke(0);
	line(0, height-30, width, height-30);

	//Draw and update enemy
    //Draw Grass
    if (frameCount % 400 == 0) {
        enems.push(new Pacman());
    }

    for (var i = enems.length - 1; i >= 0; i--) {
        enems[i].draw();
        enems[i].update();

        if (enems[i].offscreen()) {
            enems.splice(i, 1);
        }
    }

	//Draw and update player
	player.draw();
	player.update();
	player.score();
}

function keyPressed() {
    if (key == " ") {
        player.jump();
    }
}