class Hurdles{
    constructor(x,y,depth){
        this.y=y;
        this.rand=Math.round(random(0,5));
        this.body=createSprite(x,this.y,100,random(150,200));
        this.depth=depth;
        this.ran=Math.round(random(1,11));
        this.img=loadImage("asteroid "+this.ran+".png");
        this.touchable=true;
        this.body.addImage(this.img);
    }

    touch(){
        if(game.duck===false){
        if(this.touchable===true){
        if(dist(this.body.x,this.body.y,players[player.index-1].x,players[player.index-1].y)<165 && this.body.x>players[player.index-1].x+10 && this.depth===player.index){
            game.life-=1;
            this.body.depth=-900000;
        }
    }
    }else{
        if(this.ran<9){
            if(this.touchable===true){
                if(dist(this.body.x,this.body.y,players[player.index-1].x,players[player.index-1].y)<165 && this.body.x>players[player.index-1].x+10 && this.depth===player.index){
                    game.life-=1;
                    this.body.depth=-900000;
                }
            }
        }
    }
    }
}