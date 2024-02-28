class ThrowableObject extends MovableObject{

    offsetTop = 0;
    offsetBottom = 0;
    offsetRight = 20;
    offsetLeft = 0;





constructor(x, y){
    super().loadImage('img/bottle/12.png');
    this.x = x; 
    this.y = y;
    this.height = 100;
    this.width = 80;
    this.throw();


}

throw(){

    this.speedY = 25;
    this.applyGravity();
   
   let shoot =  setInterval(() => {
        this.x += 10;
       console.log(this.y, 'cleared');
      if(this.y > 580){
            clearInterval(shoot);}
    }, 25);

}







}