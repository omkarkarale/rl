class Door extends Block {
    constructor(x,y,width,height){
        super(x,y,width,height);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        fill('#b5ccff');
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
    }
}