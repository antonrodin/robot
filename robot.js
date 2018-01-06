function Robot() {

    this.gravity = 0.1;
    this.velocity = 0;
    this.up = -5;
    this.arms = -30;

    this.y = -200;
    this.x = 10;

    this.update = function() {
        if (this.y < -10 || this.velocity < 0) {
            this.velocity += this.gravity;
            this.y += this.velocity;
            this.arms = -85;
        } else {
            this.y = -10;
            this.velocity = 0;
            this.arms = -30;
        }
    }

    this.jump = function() {
        if (this.y >= -10) {
            this.velocity += this.up;
        }
    }

    this.score = function() {
        textSize(18);
        noStroke();
        floor = Math.round(this.velocity * 100) / 100;
        score = "Score: " + floor;
        text(score, width-100, 30);
    }

    this.draw = function() {
        fill(0);
        noStroke();

        //Pierna Izq
        rect(this.x + 10, this.y + height - 30, 5, 30);

        //Pierna Der
        rect(this.x + 20, this.y + height - 30, 5, 30);

        //Cuerpo
        rect(this.x + 10, this.y + height - 60, 15, 30);

        //Cuello
        rect(this.x + 16, this.y + height - 70, 3, 10);

        //Cabeza
        ellipse(this.x + 18, this.y + height - 75, 20);

        //Brazos
        strokeWeight(3);
        stroke(0);
        line(this.x + 10, this.y + height - 58, this.x + 0, this.y + height + this.arms);
        line(this.x + 24, this.y + height - 58, this.x + 35, this.y + height + this.arms);
    }

}
