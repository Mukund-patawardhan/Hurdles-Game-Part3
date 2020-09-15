class Player{
    constructor(){
        this.index=null;
        this.name=null;
        this.number=null;
        this.num=null;
        this.distance=0;
        this.score=0;
    }

    getState(){
        var gameStateRef  = database.ref('State');
        gameStateRef.on("value",function(data){
           State = data.val();
        })
    
      }
    
    updateState(state){
        database.ref('/').update({
          State: state
        });
      }

    getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value",(data)=>{
          playerCount = data.val();
        })
      }
    
    updateCount(count){
        database.ref('/').update({
          playerCount: count
        });
      }
    
    update(){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
          playerNum:this.num,
          name:this.name,
          distance:this.distance,
          score:this.score,
          jump:(height/3)*(playerCount-0.5)
        });
      }

    updateDist(){
      var plrIndex = "players/player" + this.index;
      database.ref(plrIndex).update({
        distance:this.distance
      })
    }
    updateJump(){
      var plrIndex = "players/player" + this.index;
      database.ref(plrIndex).update({
        jump:game.jump
      })
    }
    updateScore(){
      var plrIndex = "players/player" + this.index;
      database.ref(plrIndex).update({
        score:this.score
      })
    }
    getFinish(){
      var FinishRef = database.ref('finish');
      FinishRef.on("value",(data)=>{
        Finished = data.val();
      })
    }
  
  updateFinish(finish){
      database.ref('/').update({
        finish: finish
      });
    }

}