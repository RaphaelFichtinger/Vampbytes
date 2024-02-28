class MovableObject extends DrawableObject {  // SUPERKLASSE für alle beweglichen Objekte in der Welt

    speed = 0.15;
    otherDirection = false;
    speedY = 2;     //Fallgeschwindgkeit
    acceleration = 2  ;      // Beschleunigung im Downfall
    energy = 100;
    eth = 0;
    btls = 0;
    lastHit = 0;

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) { // y kleiner als 260px, damit der char am Boden stehen bleibt
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 50); // 25 mal per second intervall
    }

    isAboveGround() {
        if (this instanceof Character) {
            return this.y < 270;
        } else if (this instanceof ThrowableObject) {
            return this.y < 275;
        }
    }

    isInAir(){
        return this.speedY < 0;  
    }

    // character.isColliding(chicken);
    isColliding(mo) {
        return (this.x + this.width - this.offsetRight) >= (mo.x + mo.offsetLeft) && (this.x - this.offsetLeft) <= (mo.x + mo.width - mo.offsetRight) &&
        (this.y + this.height - this.offsetBottom) >= (mo.y + mo.offsetTop) &&
        (this.y + this.offsetTop) <= (mo.y + mo.height - mo.offsetBottom);
    }

    hitAnimation() {
        this.energy -= 5;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime(); // Zeit in Zahlenform speichern für letzten Schlag
        }
    }

    kill(){
        this.energy = 0;
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit; // DIFFERENCE in ms aktuell - ms seit zuletzt getroffen
        timepassed = timepassed / 1000; //Difference in seconds
        return timepassed < 0.75; // innerhalb der letzten 5 sec getroffen - return TRUE
    } 

    isDead() {
        return this.energy == 0;
    }

        collectSomeEth() { // die eth gesamelten Diamanten Punkte des chars erhöhen
        this.eth += 21;
        if (this.eth > 100) {
            this.eth = 100;
        } 
    }

    collectSomeBottles() { // die gesamelten BloodBottles punkte des chars erhöhen
        this.btls += 21;
        if (this.btls > 100) {
            this.btls = 100;
        } 
    }

  

    moveRight() { // nach rechts bewegen
        this.x += this.speed; // Interval für moving speed nach rechts
    }

    moveLeft() {
        this.x -= this.speed; // intervall moving speed nach links
    }

    playAnimation(images) {                                          // play animation // walking animation
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++; // Bilder immer um 1 erhöhen / durchlaufen 
    }

    jump() {
        this.speedY = 22;
    }


}