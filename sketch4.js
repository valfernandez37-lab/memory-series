let fondo;
let mariposa;
let perrito;
let arequipa;
let papel1;
let papel2;
let flor;
let flor2;
let font;
let lienzo;
let GIF;

function preload(){
  fondo = loadImage('assets/Memory4_Fondo.png');
  mariposa = loadImage('assets/Memory4_Trazos-14.png');
  perrito = loadImage('assets/Memory4_Trazos-12.png');
  papel2 = loadImage('assets/Memory4_Papel2.png');
  papel = loadImage('assets/Memory4_Papel.png');
  flor = loadImage('assets/Memory4_Flor.png');
  font = loadFont('assets/Memory4_Font.otf');
  GIF = loadImage ('assets/Memory4_GIF.gif');
  
}//end of preload

function setup() {
  createCanvas(600, 600);
  background('#B53859');
  imageMode(CENTER);
  
  lienzo = createGraphics(600, 600);
  
}//end of setup

function draw() {
  image(fondo, width/2, height/2, 600, 600);
  textAlign(CENTER,CENTER);
  textFont(font);
  
  tint(255, 20); 
  image(GIF, width/2, height/2, width, height);
  noTint();
  
  tint(255,200);
  image(flor, width/2, height/2, 400, 400);
  noTint();
  
  image(papel, 350, 120, 300, 300);
  image(papel2, 400, 440, 350, 350);
  
  if (mouseIsPressed) {
    lienzo.stroke('#E665AA');
    lienzo.strokeWeight(3);
    lienzo.line(pmouseX, pmouseY, mouseX, mouseY); 
  }
  
  image(lienzo, width/2, height/2);
  
  image(perrito, 460, 460, 400, 400);
  image(mariposa, 190, 130, 400, 400);

  
  fill('#F4F5EB');
  noStroke();
  textSize(10);
  textAlign(LEFT);
  text('la ciudad blanca', 50, 50);
  
  fill('#F4F5EB');
  noStroke();
  textSize(10);
  textAlign(LEFT);
  text('02/2010', 490, 50);

}//end of draw

function keyPressed() {
  if (key === ' ') {   // ← spacebar borra el dibujo
    lienzo.clear();
  }
   if (key === 's' || key === 'S') {
    saveCanvas('mi_recuerdo', 'png');
  }
}//end of keypressed