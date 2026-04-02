let firework1;
let font;
let estado = 0;
let frameInicio = 0;
let GIF;
let opacidadGIF = 255;
let countdown = 3;
let aura;
let fin;
let fintamañofinal= 1200;
let opacidadFin = 255;
let opacidadUnaVez = 0;
let flash = 0;


function preload () {
  firework1 =loadImage ('assets/Memory3_Firework1.png');
  font = loadFont ('assets/Memory3_Font2.otf');
  GIF = loadImage ('assets/Memory3_GIF.gif');
  aura = loadImage ('assets/Memory3_aura.png');
  fin = loadImage ('assets/FIN.png');
}//END OF PRELOAD

function setup() {
  createCanvas(600, 600);
  imageMode(CENTER);
  textFont (font);
  cursor(HAND);
} //END OF SETUP

function draw() {
  background("#0001DA");
  
  //PARA QUE APAREZCA EL NUMERO
  if (estado === 0) {
    
  tint(255, opacidadGIF);
  image(GIF, width/2, height/2, GIF.width, GIF.height);
  noTint();
    
    image (aura, width/2, height/2);
    
    image(firework1, width/2+mouseX*0.02, height/2+mouseX*0.02,1300,700); //FIREWORK ELEMENT
    
  }//end of if (draw)
  
  else if (estado === 1) {
    
  tint(255, opacidadGIF);
  image(GIF, width/2, height/2, GIF.width, GIF.height); //
  noTint();
    
  image (aura, width/2, height/2);
    

  let frameDesdeInicio = frameCount - frameInicio;
  countdown = 3 - floor(frameDesdeInicio/60);

  if (countdown <= 0) {
    opacidadGIF = lerp(opacidadGIF, 0, 0.8);
    if (opacidadGIF < 1) {
      estado = 2;
      opacidadGIF = 255;
      opacidadFin = 255;
      opacidadUnaVez = 0;
      fintamañofinal = 1900;
      flash = 255; 
    }
  } else {
    fill('#F4F5EB');
    noStroke();
    textSize(200);
    textAlign(CENTER, CENTER);
    text(countdown, width/2, 260);
    }
  } //end of estado 1
  
  else if (estado === 2) {
    
  tint(100, opacidadGIF);
  image(GIF, width/2, height/2, GIF.width, GIF.height);
    
  image (aura, width/2, height/2);
    
  flash = lerp(flash, 0, 0.15); 
  fill(255, 255, 255, flash);
  noStroke();
  rectMode(CENTER);
  rect(width/2, height/2, width, height);
    
  noTint();

  fintamañofinal = lerp(fintamañofinal, 400, 0.15);
  
  opacidadFin = lerp(opacidadFin, 0, 0.01); // ← se desvanece lento
  
  tint(255, opacidadFin);
  image(fin, width/2, height/2, fintamañofinal, fintamañofinal);
  noTint();
  
  if (opacidadFin < 50) {
    opacidadUnaVez = lerp(opacidadUnaVez, 255, 0.05);
    fill(244, 245, 235, opacidadUnaVez);
    noStroke();
    textSize(20);
    textAlign(CENTER, CENTER);
    text('¿una vez más?', width/2+mouseX*0.05, height/2+mouseY*0.05);
    }
  }//end of estado 2
  
} //END OF DRAW

function mousePressed() {
  if (estado === 0) {
    estado = 1;
    frameInicio = frameCount;
  }
    else if (estado === 2) { // ← click en estado 2 resetea todo
    estado = 0;
    countdown = 3;
    opacidadGIF = 255;
  }
  
} //END OF MOUSEPRESSED