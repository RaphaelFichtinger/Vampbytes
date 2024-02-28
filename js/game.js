let canvas; //VARIABLE -  2d Leinwand
let world; 
let keyboard = new Keyboard(); //erstelle neue Keyboard instanz

function init(){
    canvas = document.getElementById('canvas');  // greife über die Variable canvas auf die id der canvas zu 
    world = new World(canvas, keyboard); // anlegen neuer Welt (OBJEKT) canvas als Variable mitgegeben

    console.log('my character is', world.character); 
}



document.addEventListener('keydown', (event) => {
    if (event.code == "ArrowRight"){
    keyboard.RIGHT = true;                  // taste wird während drücken auf true gesetzt
    }

    if (event.code == "ArrowLeft"){
        keyboard.LEFT = true;
        }

    if (event.code ==  "ArrowUp"){
    keyboard.UP = true;
    console.log('ttt');
    }


    if (event.code ==  "Space"){
        keyboard.UP = true;
        console.log('ttt');
        }

        if (event.code ==  "KeyD"){
            keyboard.key_THROW = true;
            console.log('ttt');
            }
    



console.log(event)

});

document.addEventListener('keyup', (event) => {
    if (event.code == "ArrowRight"){            // taste wird bei loslassen drücjen auf false gesetzt
    keyboard.RIGHT = false;
    }

    if (event.code == "ArrowLeft"){
        keyboard.LEFT = false;
        }

    if(event.code == "Space" || event.code == "ArrowUp"){
    keyboard.UP = false;
    }

    if (event.code == "KeyD"){
        keyboard.key_THROW = false;
        }

});






function logCursor(){
    let canvas = document.getElementById('canvas');
    canvas.addEventListener('mousemove', function(event){
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        console.log("X: " + x + " Y: " + y ) // shows coordinates of cursor on canvas
    });
};
logCursor(canvas)


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
   let end = document.getElementById('endscreen');
   end.classList.remove('d-none');
  }

  function startGame(){
    let start = document.getElementById('startscreen');
    start.classList.add('d-none');


  }