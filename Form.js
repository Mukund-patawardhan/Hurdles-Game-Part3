class Form{
    constructor(){
      this.nameInput=createInput("Type Name Here");
      this.first=true;
      this.playerInput=createSelect();
      this.playerInput.option(1);
      this.playerInput.option(2);
      this.playerInput.option(3);
      this.playerInput.option(4);
      this.playerInput.option(5);
      this.playerInput.option(6);
      this.playerInput.option(7);
      this.submit=createButton("Submit");
      this.greeting=createElement("h2");
      this.heading=createElement("h1");
      this.number=createElement("h2");
      this.info1=createElement("h4");

      this.reset=createButton('RESET');

      this.powers=['High Jump','Bite Opponent','Two Lives','Two Lives','Squeeze Down','Speed','High Jump'];

      this.a=true;

      this.available=true;
      this.unavailable=createElement('h2','UNAVAILABLE ! Please Select Another One');
    }

    hide(){
      this.nameInput.hide();
      this.playerInput.hide();
      this.number.hide();
      this.submit.hide();
      this.info1.hide();
      this.greeting.hide();
      this.unavailable.hide();

      this.a=false;
    }

    form(){
    
      this.unavailable.position(700,400);
      this.available=true;
      game.t1=255;
      game.l1=255;
      game.t2=255;
      game.l2=255;
      game.t3=255;
      game.l3=255;
      game.t4=255;
      game.l4=255;
      game.t5=255;
      game.l5=255;
      game.t6=255;
      game.l1=255;
      this.unavailable.hide();
      
      //player.console();

      this.reset.position(0,0);

      this.nameInput.position(100,300);
      this.playerInput.position(400,300);
      this.submit.position(200,500);
      this.heading.html("Hurdles Game");
      this.heading.position(600,50);
      this.number.html(this.powers[this.playerInput.value()-1]);
      this.number.position(850,150);
      this.info1.position(400,330);
      player.num=this.playerInput.value();

      console.log(this.a===true);
      if(this.a===true){
      for(var i=0;i<=game.n.length;i++){
      if(this.playerInput.value()===game.n[i]){
        if(game.n[i]==="1"){
          game.t1=100;
          game.l1=50;
          this.available=false;
          this.unavailable.show();
        }
        if(game.n[i]==="2"){
          game.t2=100;
          game.l2=50;
          this.available=false;
          this.unavailable.show();
        }
        if(game.n[i]==="3"){
          game.t3=100;
          game.l3=50;
          this.available=false;
          this.unavailable.show();
        }
        if(game.n[i]==="4"){
          game.t4=100;
          game.l4=50;
          this.available=false;
          this.unavailable.show();
        }
        if(game.n[i]==="5"){
          game.t5=100;
          game.l5=50;
          this.available=false;
          this.unavailable.show();
        }
        if(game.n[i]==="6"){
          game.t6=100;
          game.l6=50;
          this.available=false;
          this.unavailable.show();
        }
      }
    }
    }

    this.nameInput.mousePressed(()=>{
      if(this.first===true){
        this.nameInput.value('');
        this.first=false;
      }
    })

      this.submit.mousePressed(()=>{
        if(this.available===true){
          this.nameInput.hide();
          this.playerInput.hide();
          this.number.hide();
          this.submit.hide();
          this.info1.hide();
          player.name=this.nameInput.value();
          playerCount=playerCount+1;
          player.index = playerCount;
          console.log(player.index);
          player.update();    
          player.updateCount(playerCount);
          player.number=this.playerInput.value();
          this.greeting.html("Hello "+player.name+"!!  Welcome to the Hurdles Game");
          this.greeting.position(100,300);
          this.a=false;
          game.al=1;
          game.jump=(height/3)*(player.index-0.5);
          if(player.num==='3' || player.num==='4'){
            game.lives=2;
            game.life=game.lives;
          }
      }
      })

      this.reset.mousePressed(()=>{
        player.updateCount(0);
        player.updateState(0);
        player.updateFinish(0);
      })
    }
}
