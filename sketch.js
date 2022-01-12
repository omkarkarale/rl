const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dw;
var dh;

var engine, world;

var gS = 1;

var player;
var distance;
var wall, wall2, ground1, ground2, ground3, ground4,
bouncer,ground5, ground6, ground7, mov_block, support, support2, support3, support4,
support5, support6, mov_block2, ground8, bouncer2, ground9, ground10, ground11, play;

var lt1=false, rt1=false;
var lt2=false, rt2=false;

var life = 3;

function preload(){
    lv = loadImage("libraries/lava.png");
    bg = loadImage("libraries/bg.png");
    ht3 = loadImage("libraries/ht3.png");
    ht2 = loadImage("libraries/ht2.png");
    ht1 = loadImage("libraries/ht1.png");
    go = loadImage("libraries/go.png");
    dg = loadImage("libraries/danger.png");
    lg = loadImage("libraries/logo.png");
    pl = loadImage("libraries/play.png"); 
    bpl = loadImage("libraries/bplay.png");
    hl = loadImage("libraries/help.png");
    bhl = loadImage("libraries/bhelp.png");
    gO = loadImage("libraries/gameover.png");
    rtI = loadImage("libraries/rt.png");
    brtI = loadImage("libraries/brt.png");
    win = loadImage("libraries/win.png");
    bkI = loadImage("libraries/back.png");
    bbkI = loadImage("libraries/bback.png");
    bgh = loadImage("libraries/bgh.png");
    bc = loadImage("libraries/1.png");
    st0 = loadImage("libraries/st0.png");
    st1 = loadImage("libraries/st1.png");
    st2 = loadImage("libraries/st2.png");
    st3 = loadImage("libraries/st3.png");
    jump = loadSound("libraries/jump.wav");
    wins = loadSound("libraries/win.wav");
    ouch = loadSound("libraries/ouch.mp3");
    gOs = loadSound("libraries/gO.wav");
}

function setup(){
    ww = windowWidth;
    wh = windowHeight;
    createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;
    
    // bg = createSprite(dw/2, dh/2, 6240, dh);

    player = new Player(10, 200, 25);

    ht = new HT(0,45,200,70);
    wall = new Block(0, 384, 10, dh, 0,);
    wall2 = new Block(40, 284, 10, 150, 0);
    ground1 = new Block(55, 768, 100, 500, 0);
    ground2 = new Block(230, 688, 70, 500, 0);
    ground3 = new Block(405, 598, 70, 500, 0);
    ground4 = new Block(920, 768, 300, 500, 0);
    bouncer = new Bouncer(1055, 520, 30, 5);
    ground5 = new Block(1400, 384, 200, 10, 0);
    ground6 = new Block(1250, 294, 200, 10, 0);
    ground7 = new Block(1400, 204, 200, 10, 0);
    mov_block = new Mov_Block(1520, 204, 45, 10);
    support = new Block(1775, 184, 550, 30, 0);
    support2 = new Block(2060, 204, 20, 30, 0);
    support3 = new Block(1775, 224, 550, 30, 0);
    support4 = new Block(2060, 562, 20, 30, 0);
    support5 = new Block(2345, 582, 550, 30, 0);
    support6 = new Block(2345, 542, 550, 30, 0);
    mov_block2 = new Mov_Block(2600, 552, 45, 10);
    ground8 = new Block(2660, 688, 100, 300, 0);
    ground9 = new Block(2890, 484, 50, 10, 0);       
    ground10 = new Block(3030, 384, 50, 10, 0);
    ground11 = new Block(3170, 284, 50, 10, 0);
    ground12 = new Block(3600, 192, 70, 500, 0);
    ground13 = new Block(3900, 596, 70, 500, 0);
    ground14 = new Block(4200, 192, 70, 500, 0);
    ground15 = new Block(4500, 584, 150, 300, 0);
    ground16 = new Block(5175, 634, 1200, 300, 0);
    ground17 = new Block(6045, 584, 150, 300, 0);
    // ground18 = new Block(6200, dh/2+200, 200, 300, 0);
    boom1 = new Boom(4700, 489, 20, 10);
    boom2 = new Boom(4900, 489, 20, 10);
    boom3 = new Boom(5100, 489, 20, 10);
    boom4 = new Boom(5300, 489, 20, 10);
    boom5 = new Boom(5500, 489, 20, 10);
    // boom6 = new Boom(5700, dh/2+105, 20, 10);
    // boom7 = new Boom(5900, dh/2+105, 20, 10);
    ground18 = new Block(6300, 384, 50, 10, 0);
    ground19 = new Block(6250, 294, 50, 10, 0);
    ground20 = new Block(6300, 204, 50, 10, 0);
    ground21 = new Block(6400, 434, 50, 600, 0);
    wall3 = new Door(6420, 70, 10, 130);
    ground22 = new Block(3210, 5, 6420, 10, 0)
    play = createSprite(683, 548, 200, 80);
    help = createSprite(1234.5, 54, 10, 10);
    rt = createSprite(683, 434, 10, 10);
    back = createSprite(20,20,20,20);
}

function draw(){
    background("black")

    Engine.update(engine);

    imageMode(CENTER)
    image(bg, 3550, 500)

    console.log(dw, dh)

    if(gS === 1){
        imageMode(CENTER);
        image(lg, 683, 214, 800, 200);
        play.addImage(pl);
        play.position.x = 683;
        play.position.y = 548;
        help.addImage(hl);
        help.position.x = 1234.5
        help.scale = 0.7;
        // console.log(mouseX, play.position.x)
        if(mouseX > play.position.x-play.width/2 && mouseX < play.position.x+play.width/2 && mouseY > play.position.y-play.height/2 && mouseY < play.position.y+play.height/2){
            play.addImage(bpl);
        }
        if(mouseX > help.position.x-help.width/2 && mouseX < help.position.x+help.width/2 && mouseY > help.position.y-help.height/2 && mouseY < help.position.y+help.height/2){
            help.addImage(bhl);
        }
        rt.position.x = -5000
        back.position.x = -5000
    }
    
    if(gS === 2){
        gr16();
        dis();
        mov();
        l_r();
        bounce();
        kill();
        cam();
        htF();
        flap();
        imageMode(CORNERS);
        image(lv, 0, 768, 6430, 650);
        if(player.body.position.x >= 6420){
            gS = 5;
            wins.play();
        }
        if(life===0){
            gS = 4;
            gOs.play();
        }
        rt.position.x = -5000
    }

    if(gS === 3){
        // background("white");
        console.log("3");
        back.position.x = 30;
        back.position.y = 30;
        back.scale = 0.2;
        back.addImage(bkI);
        if(mouseX > back.position.x-back.width/2 && mouseX < back.position.x+back.width/2 && mouseY > back.position.y-back.height/2 && mouseY < back.position.y+back.height/2){
            back.addImage(bbkI);
        }
        imageMode(CENTER)
        image(bgh, 683, 314, 1250, 600);
        textStyle("bold");
        textSize(25);
        text("USE LEFT AND RIGHT ARROW KEYS TO MOVE PLAYER LEFT AND RIGHT", 100, 85);
        text("USE SPACE OR UP ARROW KEYS TO JUMP PLAYER", 100, 130);
        text("IMPORTANT COMPONENTS OF GAME -", 100, 175);
        text("BOUNCER", 130, 215);
        image(bc, 280, 205, 40, 25);
        text("FLOATING GROUND", 130, 255);
        fill('#3C2515');
        rect(385, 240, 40, 15);
        fill("black");
        text("UNDERGROUND BOMB", 130, 300);
        fill('red')
        rect(425, 290, 40, 15);
        fill("black");
        text("DOOR", 130, 345);
        fill('#b5ccff')
        rect(225, 320, 15, 40);
        fill("black");
        text("IN THE 'BE THE FLAPPY BIRD' AREA USE UP ARROW OR SPACE TO CONTROL PLAYER", 100, 395);
        text("IN AREA OF FORWARD ARROW SIGN, GROUND PUSHES THE PLAYER FORWARD", 100, 445);
        image(go, 700, 490)

    }
    if(gS === 4){
        player.body.position.x = 4500;
        console.log("4");
        imageMode(CENTER);
        image(gO, 683, 244, 900, 300);
        rt.addImage(rtI);
        rt.position.x = 683
        rt.position.y = 584
        rt.scale = 2.5
        if(mouseX > rt.position.x-rt.width/2 && mouseX < rt.position.x+rt.width/2 && mouseY > rt.position.y-rt.height/2 && mouseY < rt.position.y+rt.height/2){
            rt.addImage(brtI);
        }
    }
    if(gS === 5){
        // console.log("5");
        camera.position.x = 668;
        imageMode(CENTER);
        image(win, 683, 234, 1200, 400);
        play.position.x = -5000;
        rt.position.x = -5000;
        help.position.x = -5000;
        back.position.x = -5000;
        console.log("5")
        if (life === 0) {
            imageMode(CENTER);
            image(st0,683,584,700,200);      
        }
        if (life === 1) {
            imageMode(CENTER);
            image(st1,683,584,700,200);      
        }
        if (life === 2) {
            imageMode(CENTER);
            image(st2,683,584,700,200);      
        }
        if (life === 3) {
            imageMode(CENTER);
            image(st3,683,584,700,200);      
        }
    }
    drawSprites();
}








 











function dis(){
    player.display();
    wall.display();
    // wall2.display();
    ground1.display();
    ground2.display();
    ground3.display();
    ground4.display();
    bouncer.display();
    ground5.display();
    ground6.display();
    ground7.display();
    mov_block.display();
    mov_block2.display();
    ground8.display();
    // support.display();
    // support2.display();
    // support3.display();
    // support4.display();
    // support5.display();
    // support6.display();
    ground9.display();       
    ground10.display();       
    ground11.display();       
    ground12.display();
    ground13.display();
    ground14.display();
    ground15.display();
    ground16.display();
    ground17.display();
    // ground18.display();
    boom1.display();
    boom2.display();
    boom3.display();
    boom4.display();
    boom5.display();
    // boom6.display();
    // boom7.display();
    ground18.display();
    ground19.display();
    ground20.display();
    ground21.display();
    wall3.display();    
    ground22.display();
    ht.display()
}

function keyPressed(){
	if(keyCode === UP_ARROW || keyCode === 32){
        if(detect(player, ground1) || detect(player, ground2) || detect(player, ground3) || detect(player, ground4) || detect(player, ground5) || detect(player, ground6) || detect(player, ground7) || mov_detect(player, mov_block) || mov_detect(player, mov_block2) || detect(player, ground8) || detect(player, ground9) || detect(player, ground10) || detect(player, ground11) || detect(player, ground16) || detect(player, ground17) || detect(player, ground18) || detect(player, ground19) || detect(player, ground20)){
            Matter.Body.applyForce(player.body,player.body.position,{x:0,y:-0.9});
            jump.play();
        }
	}
}

function detect(p, g){
    if(range(Math.round(g.body.position.x-g.width/2), Math.round(g.body.position.x+g.width/2)).find(i => i === Math.round(p.body.position.x)) === Math.round(p.body.position.x) &&
    Math.round(p.body.position.y+p.r/2) === Math.round(g.body.position.y-g.height/2)){
        return true;
    }
}

function range(s, e){
    const rangeArray = [];
    for (let i = s; i <= e; i++) {
        rangeArray.push(i);
    }
    return rangeArray;
}

function mov_detect(p, g){
    if(range(Math.round(g.body.position.x-g.width/2), Math.round(g.body.position.x+g.width/2)).find(i => i === Math.round(p.body.position.x)) === Math.round(p.body.position.x) &&
    Math.round((p.body.position.y+p.r/2)/10) === Math.round((g.body.position.y-g.height/2)/10)){
        return true;
    }
}
function mov(){
    if(Math.round(ground7.body.position.x+ground7.width/2) === Math.round(mov_block.body.position.x-mov_block.width/2)){
        lt1 = true;
        rt1 = false;
    }
    if(Math.round(support2.body.position.x-support2.width/2) === Math.round(mov_block.body.position.x+mov_block.width/2)){    
        lt1 = false;
        rt1 = true;
    }
    if(Math.round(ground8.body.position.x-ground8.width/2) === Math.round(mov_block2.body.position.x+mov_block2.width/2)){
        lt2 = false;
        rt2 = true;
    }
    if(Math.round(support4.body.position.x+support4.width/2) === Math.round(mov_block2.body.position.x-mov_block2.width/2)){    
        lt2 = true;
        rt2 = false;
    }

    if(lt1){
        Matter.Body.setVelocity(mov_block.body,{x: 2, y: 0});
        if(mov_detect(player, mov_block)){
            Matter.Body.setVelocity(player.body,{x: 2, y: 0});
        }
    }
    if(rt1){
        Matter.Body.setVelocity(mov_block.body,{x: -2, y: 0});
        if(mov_detect(player, mov_block)){
            Matter.Body.setVelocity(player.body,{x: -2, y: 0});
        }
    }
    if(lt2){
        Matter.Body.setVelocity(mov_block2.body,{x: 2, y: 0});
        if(mov_detect(player, mov_block2)){
            Matter.Body.setVelocity(player.body,{x: 2, y: 0});
        }
    }
    if(rt2){
        Matter.Body.setVelocity(mov_block2.body,{x: -2, y: 0});
        if(mov_detect(player, mov_block2)){
            Matter.Body.setVelocity(player.body,{x: -2, y: 0});
        }
    }

    support.body.collisionFilter.group = 1;
    support2.body.collisionFilter.group = 1;
    support3.body.collisionFilter.group = 1;
    mov_block.body.collisionFilter.group = 1;
    support.body.collisionFilter.mask = player.body;
    support2.body.collisionFilter.mask = player.body;
    support3.body.collisionFilter.mask = player.body;
    support4.body.collisionFilter.group = 1;
    support5.body.collisionFilter.group = 1;
    support6.body.collisionFilter.group = 1;
    mov_block2.body.collisionFilter.group = 1;
    support4.body.collisionFilter.mask = player.body;
    support5.body.collisionFilter.mask = player.body;
    support6.body.collisionFilter.mask = player.body;

}

function l_r(){
    if(keyIsDown(RIGHT_ARROW)){
        if(mov_detect(player, mov_block)){
            Matter.Body.applyForce(player.body,player.body.position,{x:0.1,y:0});
        }
        else if(mov_detect(player, mov_block2)){
            Matter.Body.applyForce(player.body,player.body.position,{x:0.1,y:0});
        }
        else{
		    Matter.Body.applyForce(player.body,player.body.position,{x:0.015,y:0});
        }
	}
    else if(keyIsDown(LEFT_ARROW)){
        if(mov_detect(player, mov_block)){
            Matter.Body.applyForce(player.body,player.body.position,{x:-0.1,y:0});
        }
        else if(mov_detect(player, mov_block2)){
            Matter.Body.applyForce(player.body,player.body.position,{x:-0.1,y:0});
        }
        else{
		    Matter.Body.applyForce(player.body,player.body.position,{x:-0.015,y:0});
        }
	}
}

function bounce(){
    if (range(Math.round(bouncer.body.position.x-bouncer.width/2), Math.round(bouncer.body.position.x+bouncer.width/2)).find(i => i === Math.round(player.body.position.x)) === Math.round(player.body.position.x) &&
    Math.round(player.body.position.y+player.r/2) === Math.round(bouncer.body.position.y-bouncer.height/2)) {
		Matter.Body.applyForce(player.body,player.body.position,{x:0,y:-1.2});
    }
}
 
function kill(){
    if (player.body.position.y >= 698) {
        Matter.Body.setPosition(player.body,{x:10,y:334})
        camera.position.x = 683;
        life -= 1;
        if (life > 0) {
            ouch.play();   
        }
    }
}

function cam(){
    if(player.body.position.x >= 683 && player.body.position.x <= 5743){
        camera.position.x = player.body.position.x;
    }
}

function htF(){
    if(player.body.position.x >= 683 && player.body.position.x <= 5743){
        ht.x = player.body.position.x-570;
    }
    else if(player.body.position.x < 683){
        ht.x = 120;
    }
    else{
        ht.x = 5175;
    }
}

function flap(){
    if(player.body.position.x >= 3200 && player.body.position.x <= 4415){
        Matter.Body.applyForce(player.body,player.body.position,{x:0.002,y:0});
        if(keyIsDown(UP_ARROW) || keyIsDown(32)){
            // console.log(player.body.position.x);
            Matter.Body.applyForce(player.body,player.body.position,{x:0,y:-0.103});
        }
    }
    if(range(Math.round(ground12.body.position.x-ground12.width/2), Math.round(ground12.body.position.x+ground12.width/2)).find(i => i === Math.round(player.body.position.x)) === Math.round(player.body.position.x) &&
    Math.round(player.body.position.y-player.r/2) === Math.round(ground12.body.position.y+ground12.height/2) || 
    range(Math.round(ground12.body.position.y-ground12.height/2), Math.round(ground12.body.position.y+ground12.height/2)).find(i => i === Math.round(player.body.position.y+player.r/2)) === Math.round(player.body.position.y+player.r/2) &&
    Math.round(player.body.position.x+player.r/2) === Math.round(ground12.body.position.x-ground12.width/2) || 
    range(Math.round(ground12.body.position.y-ground12.height/2), Math.round(ground12.body.position.y+ground12.height/2)).find(i => i === Math.round(player.body.position.y+player.r/2)) === Math.round(player.body.position.y+player.r/2) &&
    Math.round(player.body.position.x-player.r/2) === Math.round(ground12.body.position.x+ground12.width/2)){
        Matter.Body.setPosition(player.body,{x:10,y:334})
        camera.position.x = 683;
        life -= 1;
        if (life > 0) {
            ouch.play();   
        }
    }
    if(range(Math.round(ground13.body.position.x-ground13.width/2), Math.round(ground13.body.position.x+ground13.width/2)).find(i => i === Math.round(player.body.position.x)) === Math.round(player.body.position.x) &&
    Math.round(player.body.position.y+player.r/2) === Math.round(ground13.body.position.y-ground13.height/2) || 
    range(Math.round(ground13.body.position.y-ground13.height/2), Math.round(ground13.body.position.y+ground13.height/2)).find(i => i === Math.round(player.body.position.y+player.r/2)) === Math.round(player.body.position.y+player.r/2) &&
    Math.round(player.body.position.x+player.r/2) === Math.round(ground13.body.position.x-ground13.width/2) || 
    range(Math.round(ground13.body.position.y-ground13.height/2), Math.round(ground13.body.position.y+ground13.height/2)).find(i => i === Math.round(player.body.position.y+player.r/2)) === Math.round(player.body.position.y+player.r/2) &&
    Math.round(player.body.position.x-player.r/2) === Math.round(ground13.body.position.x+ground13.width/2)){
        Matter.Body.setPosition(player.body,{x:10,y:334})
        camera.position.x = 683;
        life -= 1;
        if (life > 0) {
            ouch.play();   
        }
    }
    if(range(Math.round(ground14.body.position.x-ground14.width/2), Math.round(ground14.body.position.x+ground14.width/2)).find(i => i === Math.round(player.body.position.x)) === Math.round(player.body.position.x) &&
    Math.round(player.body.position.y-player.r/2) === Math.round(ground14.body.position.y+ground14.height/2) || 
    range(Math.round(ground14.body.position.y-ground14.height/2), Math.round(ground14.body.position.y+ground14.height/2)).find(i => i === Math.round(player.body.position.y+player.r/2)) === Math.round(player.body.position.y+player.r/2) &&
    Math.round(player.body.position.x+player.r/2) === Math.round(ground14.body.position.x-ground14.width/2) || 
    range(Math.round(ground14.body.position.y-ground14.height/2), Math.round(ground14.body.position.y+ground14.height/2)).find(i => i === Math.round(player.body.position.y+player.r/2)) === Math.round(player.body.position.y+player.r/2) &&
    Math.round(player.body.position.x-player.r/2) === Math.round(ground14.body.position.x+ground14.width/2)){
        Matter.Body.setPosition(player.body,{x:10,y:334})
        camera.position.x = 683;
        life -= 1;
        if (life > 0) {
            ouch.play();   
        }
    }
    fill("black")
    textSize(30);
    textStyle("bold");
    text("BE THE FLAPPY BIRD", 3200, 234);
    imageMode(CENTER)
    image(dg,3600,192,60,60)
    image(dg,3900,596,60,60)
    image(dg,4200,192,60,60)
}
function gr16(){
    if(detect(player, ground16)){
        Matter.Body.applyForce(player.body,player.body.position,{x:0.03,y:0});
    }

    if(detect(player, boom1) || detect(player, boom2) || detect(player, boom3) || detect(player, boom4) || detect(player, boom5)){
        Matter.Body.setPosition(player.body,{x:10,y:334})
        camera.position.x = 683;
        life -= 1;
        if (life > 0) {
            ouch.play();   
        }
    }

    imageMode(CENTER)
    image(go,5180,444)
}
function reset(){
    window.location.reload();
}
function mousePressed() {
    // let d = dist(mouseX, mouseY, play, 200);
    if (mouseX > play.position.x-play.width/2 && mouseX < play.position.x+play.width/2 && mouseY > play.position.y-play.height/2 && mouseY < play.position.y+play.height/2) {
        gS = 2;
        play.position.x = -5000
        help.position.x = -5000
    }
    if(mouseX > help.position.x-help.width/2 && mouseX < help.position.x+help.width/2 && mouseY > help.position.y-help.height/2 && mouseY < help.position.y+help.height/2){
        gS = 3;
        help.position.x = -5000
        play.position.x = -5000
    }
    if(mouseX > rt.position.x-rt.width/2 && mouseX < rt.position.x+rt.width/2 && mouseY > rt.position.y-rt.height/2 && mouseY < rt.position.y+rt.height/2){
        reset();
    }
    if(mouseX > back.position.x-back.width/2 && mouseX < back.position.x+back.width/2 && mouseY > back.position.y-back.height/2 && mouseY < back.position.y+back.height/2){
        gS = 1;
    }
  }


