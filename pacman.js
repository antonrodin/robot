function Pacman() {

    this.top_rad = 3.92;
    this.bot_rad = 2.35;
    this.velocity = 0.05;
    this.x = width + 70;
    this.y = height - 40;
    this.speedX = 1.5;

    /*
    Top -> Should go from 3,92 to 3,14
    Bottom -> should go from 2,35 to 3,14
     */
    this.draw = function() {
        arc(this.x, this.y, 60, 60, this.top_rad, this.bot_rad, PIE);
    }

    this.update = function() {

        if (this.top_rad <= 3.14) {
            this.velocity = 0.05;
        }

        if (this.top_rad >= 3.92) {
            this.velocity = -0.05;
        }

        this.top_rad += this.velocity;
        this.bot_rad -= this.velocity;

        this.x -= this.speedX;
    }

    this.offscreen = function() {
        if (this.x + 30 < 0) {
            return true;
        } else {
            return false;
        }
    }

}
