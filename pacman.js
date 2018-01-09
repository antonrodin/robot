function Pacman() {

    this.top_rad = 3.92;
    this.bot_rad = 2.35;
    this.velocity = 0.05; //Speed of rad angle
    this.x = width + 70;
    this.y = height - 40; //Draw pacman 400-40px = 360px;
    this.speedX = 1.5; //Horizontal speed
    this.red = false;

    /*
    Top -> Should go from 3,92 to 3,14
    Bottom -> should go from 2,35 to 3,14
     */
    this.draw = function() {
        if (this.red) {
            fill(255,0,0);
        } else {
            fill(0);
        }
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

    /**
     * Check if PackMan Hit Player
     * Pacman Top Y: 400 - 40 = 360px. Radius = 60px -> 360 - 30 = 330px;
     * Robot Bottom Y:
     *      IF player.y = -10 (default)
     *      400 - 30 - 10 = 360px;
     *      Draw Leg from 360px to 390px; (Leg 390px) (HIT)
     *
     *      IF player.y = -100
     *      400 - 30 - 100 = 270px;
     *      Draw Leg from 270px to 300px; (Leg 300px) (No HIT)
     *
     *      LIMIT player.y = -70
     *      400 - 40 - 70 = 300px;
     *      Draw Leg from 300px to 330px; (Leg 330px) (Limit)
     * @param player
     */
    this.hit = function(player) {

        console.log(player.y + " - " + this.y);

        if ((this.x - 30) > 5 && (this.x - 30) < 50) {
            this.red = true;
        } else {
            this.red = false;
        }
    }

}
