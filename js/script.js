var game = new Phaser.Game(1000, 600, Phaser.CANVAS, 'gameWindow', {preload:preload,create:create,update:update, render:render});

var sgMain,sgDial,style,txt1,txt2,txt3,txt4,txt5,txt6,dAngle;

function preload() {
  game.load.image('main','img/sg_main.png');
  game.load.image('dial','img/sg_dial.png');
}

function create() {
  sgMain = game.add.image(300,300,'main');
  sgMain.anchor.set(0.5,0.5);
  sgDial = game.add.image(300,300,'dial');
  sgDial.anchor.set(0.5,0.5);

  style = { font: "24px Arial", fill: "#ff0044", align: "center" };

  txt0 = game.add.text(700, game.world.centerY, "000", style);
  txt0.inputEnabled = true;
  txt0.events.onInputDown.add(down,{deg:0}, this);

  txt1 = game.add.text(750, game.world.centerY, "045", style);
  txt1.inputEnabled = true;
  txt1.events.onInputDown.add(down,{deg:45}, this);

  txt2 = game.add.text(800, game.world.centerY, "090", style);
  txt2.inputEnabled = true;
  txt2.events.onInputDown.add(down,{deg:90}, this);

  txt3 = game.add.text(700, game.world.centerY+50, "135", style);
  txt3.inputEnabled = true;
  txt3.events.onInputDown.add(down,{deg:135}, this);

  txt4 = game.add.text(750, game.world.centerY+50, "180", style);
  txt4.inputEnabled = true;
  txt4.events.onInputDown.add(down,{deg:180}, this);

  txt5 = game.add.text(800, game.world.centerY+50, "225", style);
  txt5.inputEnabled = true;
  txt5.events.onInputDown.add(down,{deg:225}, this);

  txt6 = game.add.text(700, game.world.centerY+100, "270", style);
  txt6.inputEnabled = true;
  txt6.events.onInputDown.add(down,{deg:270}, this);
}

function down(item) {
  console.log();
  
  dAngle = (this.deg - sgDial.angle + 540) % 360 - 180;

  console.log("Current Angle: " + sgDial.angle + ". Moving " + dAngle + " degrees to " + this.deg);

  var tweenDial = game.add.tween(sgDial);
  tweenDial.to({ angle: (sgDial.angle + dAngle) }, 3000, Phaser.Easing.Cubic.InOut, true, 0);
  sgDial.angle = this.deg;
  
}

function update() {
  
}

function render() {

}