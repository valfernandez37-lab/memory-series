let nochebuena;
let foto;
let ornament1;
let ornament2;
let ornament3;
let alma;
let coloractual;
let colorobjetivo;
let colores = [
  [255, 100, 100],  // rojo
  [255, 220, 0],  // amarillo
  [100, 255, 150],  // verde
];
let colorIndex = 0;
let font;
let xTexto = 0;
let wrapper;
let mascara;
let foto2;
let foto3;
let foto4;
let fotoIndex = 0; 
let fotos;


function preload() {
  nochebuena = loadImage('assets/Memory2_LaceMini-03.png');
  foto = loadImage('assets/Memory2_Foto.png');
  ornament1 = loadImage ('assets/Memory2_Ornaments-05.png');
  ornament2 = loadImage ('assets/Memory2_Ornaments-06.png');
  alma = loadImage ('assets/Memory2_Luces.png');
  font =loadFont('assets/Memory2_Font.otf');
  wrapper = loadImage ('assets/Memory2_Wrapper.jpeg');
  foto2 = loadImage ('assets/Memory2_Foto2.png');
  foto3 = loadImage ('assets/Memory2_Foto3.png');
  foto4 = loadImage ('assets/Memory2_Foto4.png');
}//end of preload

function setup() {
  createCanvas(600, 600);
  imageMode(CENTER);
  textFont(font);
  textAlign(CENTER, CENTER);
  coloractual = color(colores[0]);
  colorobjetivo = color(colores[1]);
  mascara = createGraphics(300, 300); 
  push();
  imageMode(CORNER);
  image(mascara, width/2 - 150, height/2 - 150);
  pop();
  mascara.image(wrapper, 0, 0, 300, 300);
  fotos = [foto, foto2, foto3, foto4];
}//end of setup

function draw() {
  background('#C7292A');
  
  image(fotos[fotoIndex], width/2, height/2, 300, 300);
  
  // PARA REVELAR   
  if (mouseX > width/2 - 150 && mouseX < width/2 + 150 &&
      mouseY > height/2 - 150 && mouseY < height/2 + 150) {
    mascara.erase();
    mascara.noStroke();
    mascara.ellipse(mouseX - width/2 + 150, mouseY - height/2 + 150, 60, 60);
    mascara.noErase();
  }//fin del if
  
  // WRAPPER
  push();
  imageMode(CORNER);
  image(mascara, width/2 - 150, height/2 - 150);
  pop();
  
  // COLORES DEL MOUSE
  coloractual = lerpColor(coloractual, colorobjetivo, 0.09);
  if (red(coloractual) > red(colorobjetivo) - 5 && 
      red(coloractual) < red(colorobjetivo) + 5) {
    colorIndex = (colorIndex + 1) % colores.length;
    colorobjetivo = color(colores[colorIndex]);
  }
  
  image(ornament1, 300, 100, 300, 300);
  image(ornament2, 300, 500, 300, 300);
  
  tint(coloractual);
  image(alma, mouseX, mouseY, 500, 270);
  noTint();
  

  if (mouseX > width/2 - 200 && mouseX < width/2 + 200 &&
      mouseY > 100 && mouseY < 600) { 
    tint(0, 59, 49);
  } else {
    noTint();
  }
  image(nochebuena, width/2, 280, 500, 500);
  noTint();
  
  // FRASES
  fill('#F4F5EB'); 
  noStroke();
  textSize(10);
  textAlign(LEFT, CENTER); 
  let frase = '¿Y a qué hora vamos a cenar?  |  ¡Que ya quiero abrir los regalos!  |  ¿Qué le pediste a Santa?  |  Abuelita ¿me sirves más chocolate?  |  ';
  let anchoTexto = textWidth(frase);
  xTexto -= 1;
  if (xTexto <= -anchoTexto) {
    xTexto = 0;
  }
  text(frase, xTexto, 410);
  text(frase, xTexto + anchoTexto, 410); 
} //end of draw

function keyPressed() {
  if (key === ' ') {
    mascara.clear();
    mascara.image(wrapper, 0, 0, 300, 300);
    fotoIndex = (fotoIndex+1) % fotos.length;
  }
}//fin de keypressed