var State=0,playerCount=0,hurdle,player,game,form,database,allPlayers,distance = 0,Finished=0;
var player1,player2,player3,player4,players;
var backGround,finishLine;

function preload(){

  backGround=loadImage("bg.jpg");

  finishLine=loadImage("finish 11.jpg")
}

function setup() {
  createCanvas(1360,625);
  database = firebase.database();
  game=new Game();
  form=new Form();
}

function draw() {
  if(State!==0){
    background('#526A27');
  }else{
    background('white');
  }

  if(State===0){
    game.form();
  }else{
    if(State===1){
      game.play();
    }else{
      if(State===2){
        game.end();
      }
    }
  }

}
