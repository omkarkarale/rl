class HT {
    constructor(x,y,w,h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;    
        this.ht3 = loadImage("libraries/ht3.png");
        this.ht2 = loadImage("libraries/ht2.png");
        this.ht1 = loadImage("libraries/ht1.png");
    }
    display(){
        if(life === 3){
            // console.log(life);
            imageMode(CENTER);
            image(this.ht3,this.x, this.y, this.w, this.h);   
        }
        else if(life === 2){
            // console.log(life);
            imageMode(CENTER);
            image(this.ht2,this.x, this.y, this.w, this.h);   
        }
        else if(life === 1){
            // console.log(life);
            imageMode(CENTER);
            image(this.ht1,this.x, this.y, this.w, this.h);   
        }
    }
}