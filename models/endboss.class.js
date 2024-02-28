class Endboss extends MovableObject {

    width = 350;
    height = 350;
    y= 148;

    IMAGES_WALKING = [
        'img/enemie_boss_devil/Idle/0_Magician_Idle_001.png',
        'img/enemie_boss_devil/Idle/0_Magician_Idle_002.png',
        'img/enemie_boss_devil/Idle/0_Magician_Idle_003.png',
        'img/enemie_boss_devil/Idle/0_Magician_Idle_004.png',
        'img/enemie_boss_devil/Idle/0_Magician_Idle_005.png',
        'img/enemie_boss_devil/Idle/0_Magician_Idle_006.png',
        'img/enemie_boss_devil/Idle/0_Magician_Idle_007.png',
        'img/enemie_boss_devil/Idle/0_Magician_Idle_008.png',
        'img/enemie_boss_devil/Idle/0_Magician_Idle_009.png',
        'img/enemie_boss_devil/Idle/0_Magician_Idle_010.png',
        'img/enemie_boss_devil/Idle/0_Magician_Idle_011.png',
        'img/enemie_boss_devil/Idle/0_Magician_Idle_012.png',
        'img/enemie_boss_devil/Idle/0_Magician_Idle_013.png',
        'img/enemie_boss_devil/Idle/0_Magician_Idle_014.png',
        'img/enemie_boss_devil/Idle/0_Magician_Idle_015.png',
        'img/enemie_boss_devil/Idle/0_Magician_Idle_016.png',
        'img/enemie_boss_devil/Idle/0_Magician_Idle_017.png',
    ];


    constructor(){
        super().loadImage( this.IMAGES_WALKING[0])
        this.loadImages(this.IMAGES_WALKING);
        this.x = 2500;
        this.speed = 0;
        this.animate();

    }

    animate(){
        this.moveLeft();
        
        setInterval(() => {   //Unendliche Hochzählung
            this.playAnimation(this.IMAGES_WALKING);
            }, 50 )}
    



}