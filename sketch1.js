let font;
let tamañoinicial = 12;  // 30 * 0.42
let tamañofinal = 12;
let grosorinicial = 0;
let grosorfinal = 0;
let alma;
let colorinicial;
let colorfinal;
let opacidadboton = 0;
let opacidadbotonfinal = 0;
let ondas = [];
let ondasActivas = false;
let mousePresionado = false;


function preload(){
  font = loadFont('assets/Memory1_Font.otf');
  alma = loadImage('assets/Memory1_Alma.png');
}//end of preload

function setup() {
  createCanvas(600, 600);
  textFont(font);
  textAlign(CENTER, CENTER);
  imageMode(CENTER);
  cursor(HAND);
  colorinicial = color('white');
  colorfinal = color('white');
}//end of setup

function draw() {
  //COLOR DE FONDO
  colorinicial = lerpColor(colorinicial, colorfinal, 0.05);
  background(colorinicial);
  
  //LATIDO IMAGEN
  latido = 1 + 0.05 * sin(frameCount * 0.07);
  image(alma, width/2, height/2, 1350 * latido, 700 * latido);
  
  // ONDAS
  let velocidadOndas = mousePresionado ? 10 : 60;
  if (ondasActivas && frameCount % velocidadOndas === 0) {
    ondas.push({ r: 0, opacidad: 100 });
  }
  for (let i = ondas.length - 1; i >= 0; i--) {
    let o = ondas[i];
    o.r += 3;
    o.opacidad -= 0.2;
    noFill();
    stroke(187, 70, 38, o.opacidad);
    strokeWeight(1);
    ellipse(width/2, height/2, o.r * 2, o.r * 2);
    if (o.opacidad <= 0) {
      ondas.splice(i, 1);
    }
  }

  // TAMAÑO TEXTO
  tamañoinicial = lerp(tamañoinicial, tamañofinal, 0.05);
  
  // GROSOR TEXTO
  grosorinicial = lerp(grosorinicial, grosorfinal, 0.05);
  
  fill('#281D1C');
  stroke('#281D1C');
  strokeWeight(grosorinicial);
  textSize(tamañoinicial);
  text('al corazón.', width/2, height/2);
  
  // BOTON
  opacidadboton = lerp(opacidadboton, opacidadbotonfinal, 0.015);
  
  if (tamañoinicial > 85) {
    fill(231, 177, 62, opacidadboton);
    noStroke();
    rectMode(CENTER);
    rect(width/2, height/2 - 42, 120, 30, 15);
    
    fill(40, 29, 28, opacidadboton);
    textSize(12);
    text('un abrazo', width/2, height/2 - 44);
    
    stroke('#281D1C');
    strokeWeight(grosorinicial);
  }
}//end of draw

function keyPressed() {
  if (key === ' ') {
    if (tamañofinal === 12) {
      tamañofinal = 117;
      grosorfinal = 6;
      colorfinal = color('#E7B13E');
      opacidadbotonfinal = 255;
      ondasActivas = true;
      document.body.style.background = 'rgb(241, 187, 72)';
    } else {
      tamañofinal = 12;
      grosorfinal = 0;
      colorfinal = color('white');
      opacidadbotonfinal = 0;
      ondasActivas = false;
      ondas = [];
      document.body.style.background = '#f7f7f7';
    }
  }
}// end of key pressed

function mousePressed() {
  mousePresionado = true;
}//end mousePressed
function mouseReleased() {
  mousePresionado = false;
}//end of mouseRelased