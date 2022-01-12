class Mov_Block{
    constructor(x, y ,width, height,options){
        var options = {
            density: 1,
        }
        this.body = Bodies.rectangle(x,y,width,height);
        this.width = width;
        this.height = height;
        World.add(world, this.body) 
    }
    display(){
        var pos = this.body.position;
        // strokeWeight(0);
        strokeWeight(3);
        fill('#3a2e27');
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
    }
}