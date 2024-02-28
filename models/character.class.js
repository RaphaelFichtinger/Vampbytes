class Character extends MovableObject{          // Character erbt von der Superklasse "MovableObjekt"
width = 190;
height = 200;
y = 270;
speedY = 0;
offsetTop = 0;
offsetBottom = 0;
offsetRight = 114;
offsetLeft = 0;
IMAGES_WALKING = [ 
'img/charakter/Walking/0_Dark_Elves_Walking_001.png', //char imgs walking
'img/charakter/Walking/0_Dark_Elves_Walking_002.png',
'img/charakter/Walking/0_Dark_Elves_Walking_003.png',
'img/charakter/Walking/0_Dark_Elves_Walking_004.png',
'img/charakter/Walking/0_Dark_Elves_Walking_005.png',
'img/charakter/Walking/0_Dark_Elves_Walking_006.png',
'img/charakter/Walking/0_Dark_Elves_Walking_007.png',
'img/charakter/Walking/0_Dark_Elves_Walking_008.png',
'img/charakter/Walking/0_Dark_Elves_Walking_009.png',
'img/charakter/Walking/0_Dark_Elves_Walking_010.png',
'img/charakter/Walking/0_Dark_Elves_Walking_012.png',
'img/charakter/Walking/0_Dark_Elves_Walking_013.png',
'img/charakter/Walking/0_Dark_Elves_Walking_014.png',
'img/charakter/Walking/0_Dark_Elves_Walking_015.png',
'img/charakter/Walking/0_Dark_Elves_Walking_016.png',
'img/charakter/Walking/0_Dark_Elves_Walking_017.png',
'img/charakter/Walking/0_Dark_Elves_Walking_018.png',
'img/charakter/Walking/0_Dark_Elves_Walking_019.png',
'img/charakter/Walking/0_Dark_Elves_Walking_020.png',
'img/charakter/Walking/0_Dark_Elves_Walking_021.png',
'img/charakter/Walking/0_Dark_Elves_Walking_022.png',
'img/charakter/Walking/0_Dark_Elves_Walking_023.png'
];

IMAGES_JUMPING = [
    'img/charakter/Jump/jp0.png',
    'img/charakter/Jump/jp1.png',
    'img/charakter/Jump/jp2.png',
    'img/charakter/Jump/jp3.png',
    'img/charakter/Jump/jp4.png',
    'img/charakter/Jump/jp5.png'
];

IMAGES_DEAD = [
    'img/charakter/Dying/0_Dark_Elves_Dying_001.png',
    'img/charakter/Dying/0_Dark_Elves_Dying_002.png',
    'img/charakter/Dying/0_Dark_Elves_Dying_003.png',
    'img/charakter/Dying/0_Dark_Elves_Dying_004.png',
    'img/charakter/Dying/0_Dark_Elves_Dying_005.png',
    'img/charakter/Dying/0_Dark_Elves_Dying_006.png',
    'img/charakter/Dying/0_Dark_Elves_Dying_007.png',
    'img/charakter/Dying/0_Dark_Elves_Dying_008.png',
    'img/charakter/Dying/0_Dark_Elves_Dying_009.png',
    'img/charakter/Dying/0_Dark_Elves_Dying_010.png',
    'img/charakter/Dying/0_Dark_Elves_Dying_011.png',
    'img/charakter/Dying/0_Dark_Elves_Dying_012.png',
    'img/charakter/Dying/0_Dark_Elves_Dying_013.png',
    'img/charakter/Dying/0_Dark_Elves_Dying_014.png',

];

IMAGES_HURT = [
    'img/charakter/Hurt/hurt1.png',
    'img/charakter/Hurt/hurt2.png',
    'img/charakter/Hurt/hurt3.png',
];

world;
walking_sound = new Audio('audio/walking.mp3');


    constructor(){   /*constructor (muss immer vorhanden sein in einer Klasse, 
                    und wird immer bei erstellen der Klasse mit aufgerufen */
        super().loadImage('img/charakter/Walking/0_Dark_Elves_Walking_000.png');  //ruft methode aus der superklasse auf (loadImage) und verwendet diese
        this.loadImages(this.IMAGES_WALKING);// load images Methode aus der superklasse anwenden
        this.loadImages(this.IMAGES_JUMPING); 
        this.loadImages(this.IMAGES_DEAD); 
        this.loadImages(this.IMAGES_HURT); 
        this.applyGravity(); // Gravitation bei Erstellung
        this.animate();
        
        } //constructor closes here


        animate() {
            setInterval(() => {
                
                this.walking_sound.pause(); // walking sound stoppen / pausieren 
                
                if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x ) {
                    this.speed = 5;
                this.moveRight(); // move right aus movable object
                this.otherDirection = false; // geht nach rechts also (!andere Richtung) => falsch
                this.walking_sound.play();
                }

                if (this.world.keyboard.LEFT && this.x > 65 ) {
                    this.moveLeft();
                    this.otherDirection = true; // andere richtung als normalerweise also (andere Richtung) => true
                    this.walking_sound.play(); // walking sound während gehen abspielen 
                   // intervall moving speed nach links
                    this.otherDirection = true; // andere richtung als normalerweise also (andere Richtung) => true
                }

                if(this.world.keyboard.UP && !this.isAboveGround()){
                    console.log('keyboard.UP');
                    this.jump();
                }
        
                this.world.camera_x = +this.x -50;
            },  1000/60); // intevall speed 60 fps
        



          setInterval(() => {
          
                    if(this.isDead()){
                        this.playAnimation(this.IMAGES_DEAD);
                    } else if (this.isHurt()){
                        this.playAnimation(this.IMAGES_HURT);
                    } 
                    else if(this.isAboveGround()){
                        this.playAnimation(this.IMAGES_JUMPING);
                    } else {

                    if(this.world.keyboard.RIGHT || this.world.keyboard.LEFT) { // wenn rechts oder || links true

                    // Unendliche Hochzählung// walking animation
                    this.playAnimation(this.IMAGES_WALKING);
                    }
                }
                }, 45); // Bilder intervall 70ms
              
       

         
            }
            
            jump(){
                this.speedY = 22;
            }


            

    // character.isColliding(chicken);




    }