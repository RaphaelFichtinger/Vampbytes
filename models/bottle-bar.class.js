class BottleBar extends DrawableObject {


    IMAGES = [
       'img/statusbars/magic/0.png',
       'img/statusbars/magic/20.png',
       'img/statusbars/magic/40.png',
       'img/statusbars/magic/60.png',
       'img/statusbars/magic/80.png',
       'img/statusbars/magic/100.png'

    ];

    percentage = 100; // 100% statusbar 


    constructor() {
        super(); // methoden der superklasse initialisieren
        this.loadImages(this.IMAGES);
        this.setPercentage(0);
        this.x = 80; // von links
        this.y = 110; // von oben
        this.width = 200;
        this.height = 60;
    }

    // setPercentage(50);
    setPercentage(percentage) {// jeweilige imgs anzeigen
        this.percentage = percentage; // => eine Zahl zwischen 0 ... 5 ermitteln
        let path = this.IMAGES[this.resolveImageIndex()]; // resolveImageIndex returnt, liefert eine Zahl zwischen- 0.....5 fûr den pfad 
        this.img = this.imageCache[path]; // path wird durch reolveImageIndex ermittelt 
    }




    resolveImageIndex() {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 4;
        } else if (this.percentage > 60) { // Funktin zu ermitteln der % um health in der bar zu zeigen (bilder wechseln health)
            return 3;
        } else if (this.percentage > 40) {
            return 2;
        } else if (this.percentage > 20) {
            return 1;
        } else {
            return 0;
        }
    }


}