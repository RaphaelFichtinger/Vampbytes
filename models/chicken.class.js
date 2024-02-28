class Chicken extends MovableObject{    // Chicken erbt von der Superklasse "MovableObjekt"
height = 140;
width = 150;
y= 320;
energy = 100;
offsetTop = 20;
offsetBottom = -20;
offsetRight = 20;
offsetLeft = -20;

    IMAGES_WALKING = [
    'img/enemies/demon_magician/Walking/0_Magician_Walking_001.png',
    'img/enemies/demon_magician/Walking/0_Magician_Walking_002.png',
    'img/enemies/demon_magician/Walking/0_Magician_Walking_003.png',
    'img/enemies/demon_magician/Walking/0_Magician_Walking_004.png',
    'img/enemies/demon_magician/Walking/0_Magician_Walking_005.png',
    'img/enemies/demon_magician/Walking/0_Magician_Walking_006.png',
    'img/enemies/demon_magician/Walking/0_Magician_Walking_007.png',
    'img/enemies/demon_magician/Walking/0_Magician_Walking_008.png',
    'img/enemies/demon_magician/Walking/0_Magician_Walking_009.png',
    'img/enemies/demon_magician/Walking/0_Magician_Walking_010.png',
    'img/enemies/demon_magician/Walking/0_Magician_Walking_011.png',
    'img/enemies/demon_magician/Walking/0_Magician_Walking_012.png',
    'img/enemies/demon_magician/Walking/0_Magician_Walking_013.png',
    'img/enemies/demon_magician/Walking/0_Magician_Walking_014.png',
    'img/enemies/demon_magician/Walking/0_Magician_Walking_015.png',
    'img/enemies/demon_magician/Walking/0_Magician_Walking_016.png',
    'img/enemies/demon_magician/Walking/0_Magician_Walking_017.png',
    'img/enemies/demon_magician/Walking/0_Magician_Walking_018.png',
    'img/enemies/demon_magician/Walking/0_Magician_Walking_019.png',
    'img/enemies/demon_magician/Walking/0_Magician_Walking_020.png',
    'img/enemies/demon_magician/Walking/0_Magician_Walking_021.png',
    'img/enemies/demon_magician/Walking/0_Magician_Walking_022.png',
    'img/enemies/demon_magician/Walking/0_Magician_Walking_023.png'
];
IMAGES_DEAD = ['img/enemies/demon_magician/Dying/0_Magician_Dying_014.png'];

    constructor(){  //wird immer bei erstellen der Klasse mit aufgerufen */

        super().loadImage('img/enemies/demon_magician/Walking/0_Magician_Walking_000.png');   //ruft methode aus der superklasse auf (loadImage) und verwendet diese
        this.loadImages(this.IMAGES_WALKING); // bilder reinladen
        this.loadImages(this.IMAGES_DEAD); // bilder reinladen
        this.x = 400 + Math.random() * 2000; // mit Math.random eine random-Zahl generieren die alle Gegner jedesmal random placed
        this.speed = 0.15 + Math.random() * 0.25; // Zufällige Zahl für walking speed
        this.animate();
        this.animateDead();
        }

    
        animate() {
            setInterval(() => {
                if (!this.isDead()) {
                    this.moveLeft();
                }
            }, 1000 / 60);
        }

    
            animateDead(){
            setInterval(() => {
                if (this.isDead()) {
                    this.playAnimation(this.IMAGES_DEAD);
                } else {
                    this.playAnimation(this.IMAGES_WALKING);
                }
            }, 130);
        }
    }

 
    
    
          
















