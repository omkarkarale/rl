class Player {
    constructor(x,y,r){
        var options ={
            density: 0.065,
        }
        this.body = Bodies.circle(x,y,r/2+0.1,options);
        this.r = r;
        this.image = loadImage('libraries/stone.png');
        World.add(world,this.body);
    }
    display()   
    {
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        // rotate(angle)
        rotate(angle);        
        imageMode(CENTER)
        fill("white")
        image(this.image,0,0,this.r,this.r)
        pop();
        
    }
}
