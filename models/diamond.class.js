class Diamond extends MovableObject{

    height = 50;
    width = 50;
    y= 360;
    x = 300;


    IMAGES = [
    'img/collectables/Diamond.png'
];
    constructor(){  //wird immer bei erstellen der Klasse mit aufgerufen */

        super().loadImage(this.IMAGES[0]);   //ruft methode aus der superklasse auf (loadImage) und verwendet diese
        this.x = 300 + Math.random() * 2000; // mit Math.random eine random-Zahl generieren die alle Gegner jedesmal random placed
        }
}