class Block {
    constructor(x,y,width,height,angle){
        var options = {
            isStatic:true,
            friction: 0.1,
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        Matter.Body.setAngle(this.body, angle);
        World.add(world, this.body)
    }
    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        strokeWeight(3);
        fill('#3C2515');
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
    }
}           