class World {
    character = new Character(); //Char
    level = level1;


    canvas; // leinwand
    ctx;   // context variable
    keyboard; // keyboard
    camera_x = 0;
    statusBar = new StatusBar();
    ethBar = new EthBar();
    bottleBar = new BottleBar();
    throwableObjects = [];

    constructor(canvas, keyboard) {    // canvas wird übergeben von game.js, worin später die Welt reingezeichnet wird
        this.ctx = canvas.getContext('2d'); // get context 2d render methode / MALEN
        this.canvas = canvas; // canvas von oben wird in this.canvas gegeben
        this.keyboard = keyboard; // keyboard von oben wird in this.keyboard gegeben
        this.draw(); // zeichen-Methode
        this.setWorld(); // Welt Instanz an alle MovableObjects geben
        this.checkAllCollisions();
    }

    setWorld() {
        this.character.world = this; // nur .this für DIESE aktuelle world instantz
    }

    checkAllCollisions() {
        setInterval(() => {
            this.checkCollisionBottleAndEnemy();
            this.checkIfJumpOnEnemy();
        }, 50);

        setInterval(() => {
            this.checkForEnemyCollisions();
            this.checkForEthCollisions();
            this.checkForBottleCollisions();
            this.checkThrowables();
        }, 200);
    }



    checkThrowables() {
        if (this.keyboard.key_THROW) {
            let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100)
            this.throwableObjects.push(bottle);
        }

    }

    checkForEnemyCollisions() {
        // check nemy collisions
        this.level.enemies.forEach((enemy) => {             // for each enemy colliding
            if (this.character.isColliding(enemy)) {          // check if colliding
                this.character.hitAnimation();
                this.statusBar.setPercentage(this.character.energy);
                console.log('collision with char', this.character.energy)
            }
            if(this.character.energy ==0){
                stopGame();
            }
        });
    }

    checkForEthCollisions() {
        setInterval(() => {
            this.level.diamonds.forEach((diamond) => {             // for each enemy colliding
                if (this.character.isColliding(diamond)) {          // check if colliding
                    this.character.collectSomeEth();
                    this.ethBar.setPercentage(this.character.eth);
                    console.log('collision with ETHER', this.character.eth);
                    this.handleEthCollection(diamond);
                }

            });
        }, 200);
    }

    handleEthCollection(diamond) {
        this.level.diamonds.splice(this.level.diamonds.indexOf(diamond), 1);
    };


    checkForBottleCollisions() {
        setInterval(() => {
            this.level.bottles.forEach((bottle) => {             // for each enemy colliding
                if (this.character.isColliding(bottle)) {          // check if colliding
                    this.character.collectSomeBottles();
                    this.bottleBar.setPercentage(this.character.btls);
                    console.log('collision with ETHER', this.character.btls);
                    this.handleBottleCollection(bottle);

                    
                }

            });
        }, 200);
    }

    handleBottleCollection(bottle) {
        this.level.bottles.splice(this.level.bottles.indexOf(bottle), 1);
        

    };




    checkCollisionBottleAndEnemy() {
        this.throwableObjects.forEach((bottle) => {
            this.level.enemies.forEach((enemy) => {
                if (enemy.isColliding(bottle)) {
                    enemy.kill();
                }
            });
        });
    }

    checkIfJumpOnEnemy(){
            this.level.enemies.forEach((enemy) => {
                if (this.character.isColliding(enemy) && this.speedY < 0 ) {
                    enemy.kill();
                }
            });
        }
    







    draw() { // malt letztendlich in die Welt, nach Reihenfolge der unteren Anordnung

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); //Methode setzt die Pixel in einem rechteckigen Bereich auf transparentes Schwarz 

        this.ctx.translate(-this.camera_x, 0);  //schiebt kameraview nach links

        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.clouds);
        this.ctx.translate(this.camera_x, 0); // Statusbar fixed over char 
        // space for fixed objects
        this.addToMap(this.statusBar);
        this.addToMap(this.ethBar);
        this.addToMap(this.bottleBar);
        this.ctx.translate(-this.camera_x, 0); //// Statusbar fixed over char 

        this.addToMap(this.character);
        this.addObjectsToMap(this.level.diamonds);
        this.addObjectsToMap(this.level.bottles);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.throwableObjects);



        this.ctx.translate(+this.camera_x, 0); //schiebt camview wieder back nach rechts




        let self = this; // da 'this' nicht in der Methode 'requestAnmationFrage funktioniert wird es erste einer Variable gegeben' 
        requestAnimationFrame(function () { // animation der Bilder, werden je nach Grafikarte öfter geladen (25 FPS, 60 FPS, usw.)
            self.draw();    // self Variable mit der 'draw' Methode, draw() wird immer wieder aufgerufen
        }
        )
    }


    addObjectsToMap(objects) {
        objects.forEach(o => { // adden von Movable Objects mit forEach schleife
            this.addToMap(o);

        });
    }

    addToMap(mo) {

        if (mo.otherDirection) { // checken ob der char nach links geht
            this.flipImage(mo);
        }

        mo.draw(this.ctx)// Funktion zum adden von MovableObjects
        mo.drawFrame(this.ctx);

        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }




    }
    flipImage(mo) {
        this.ctx.save(); // speichern der aktuellen Einstellungen des Contexts 
        this.ctx.translate(mo.width, 0)
        this.ctx.scale(-1, 1); // durch spiegeln verschibt sich x leicht daher * - 1 zum umdrehen 
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1; // durch spiegeln verschibt sich x leicht daher * - 1 zum umdrehen 
        this.ctx.restore();
    }

  
}
function stopGame(){
    setTimeout( ()=> {
        clearAllIntervals();  // clears all intervals of the game and stops the game
    }, 310);
    setTimeout( ()=> {
      showEndscreen();  // clears all intervals of the game and stops the game
    }, 309);
}

function clearAllIntervals() {
    for (let i = 1; i < 9999; i++) window.clearInterval(i);  // clears all intervals of the game and stops the game
  }

  function showEndscreen(){
   let end =  document.getElementById('endscreen');
   end.classList.remove('d-none');
  }