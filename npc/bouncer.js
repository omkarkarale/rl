class Bouncer extends Block {
    constructor(x,y,width,height){
        super(x,y,width,height);
        this.image = loadImage("libraries/1.png");
    }
    display(){
        var pos = this.body.position;
        // strokeWeight(0);
        imageMode(CENTER);
        image(this.image, pos.x, pos.y+3, this.width, 20)
    }
}