class Cloud extends MovableObject{ // colud erbt von Superklasse 'Movable Object'
    width = 750;            // width der Wolken
    height = 190;       // hieght der Wolken
    y = 35;   
    x = 10;                 // y Achse (hoch-tief) der Wolken
    
    constructor(){ 
        super().loadImage('img/background/layers/2.png'); // mit der loadImage() Methode der Superklase die Wolken laden
        
        this.x = 10 + Math.random() * 2500; // wolken positionieren (random)
        this.animate();
    }

        animate(){
         this.moveLeft(); // move Left unten wird aufgerufen
        }


        moveLeft(){
            setInterval(() => { // setInterval verschiebt alle paar ms die Koordinate x der Wolken
                this.x -= 0.25;  //die Pixel die abgezogen werden 
            }, 1000/60); // 100 geteilt durch 60 = 60 FPS 
        }



    
}
