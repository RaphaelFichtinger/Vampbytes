const level1 = new Level(
    [
        new Chicken(),
        new Chicken(), //Gegner
        new Chicken(),
        new Chicken(),
        new Chicken(), //Gegner
        new Endboss()
    ],
    
    [
        new Diamond(),
        new Diamond(),
        new Diamond(),     
        new Diamond(),
        new Diamond(),
    ],
    [
        new Bottle(),
        new Bottle(),
        new Bottle(),
        new Bottle(),
        new Bottle()
    ],
    [
        new BackgroundObject('img/background/background.png', 0), //Pfad von background-layer image mit variablen für x und y Positionierung
        new BackgroundObject('img/background/layers/7.png', 0), //Pfad von background-layer image mit variablen für x und y Positionierung
        new BackgroundObject('img/background/layers/4.png', 0), //Pfad von background-layer image mit variablen für x und y Positionierung
        new BackgroundObject('img/background/background.png', 719), //Pfad von background-layer image mit variablen für x und y Positionierung
        new BackgroundObject('img/background/layers/7.png', 719), //Pfad von background-layer image mit variablen für x und y Positionierung
        new BackgroundObject('img/background/layers/4.png', 719), //Pfad von background-layer image mit variablen für x und y Positionierung
        new BackgroundObject('img/background/background.png', 1439), //Pfad von background-layer image mit variablen für x und y Positionierung
        new BackgroundObject('img/background/layers/7.png', 1439), //Pfad von background-layer image mit variablen für x und y Positionierung
        new BackgroundObject('img/background/layers/4.png', 1439), //Pfad von background-layer image mit variablen für x und y Positionierung
        new BackgroundObject('img/background/background.png',2159), //Pfad von background-layer image mit variablen für x und y Positionierung
        new BackgroundObject('img/background/layers/7.png', 2159), //Pfad von background-layer image mit variablen für x und y Positionierung
        new BackgroundObject('img/background/layers/4.png', 2159) //Pfad von background-layer image mit variablen für x und y Positionierung
    ],


    [
        new Cloud(), // cloud
        new Cloud(), // cloud
        new Cloud() // cloud
    ],

 

  
);