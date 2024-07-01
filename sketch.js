//variaveis da Bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 30;
let raio = diametro/2
//variaveis da velocidade
let velocidadexBolinha = 6;
let velocidadeyBolinha = 6;


// variaveis da minha raquete
let xMinhaRaquete = 20;
let yMinhaRaquete = 150;
let larguraMinhaRaquete = 10;
let alturaMinhaRaquete =100;


//função dimenção do fundo
function setup() {
  createCanvas(600, 400);
}
//função desenhar
function draw() {
  background(0, 255, 0);
 Bolinha()
  minhaRaquete();
}

function Bolinha() {circle(xBolinha, yBolinha, diametro)
  xBolinha += velocidadexBolinha; 
  yBolinha += velocidadeyBolinha;
  if (xBolinha + raio > width|| xBolinha - raio < 0){
    velocidadexBolinha *= -1;
  }
  if (yBolinha + raio > height|| yBolinha - raio < 0){
    velocidadeyBolinha *= -1;
  }
}

function minhaRaquete(){
  rect(xMinhaRaquete,yMinhaRaquete,larguraMinhaRaquete,alturaMinhaRaquete)
  if(keyIsDown(UP_ARROW)){
    yMinhaRaquete -= 10
  }
  if(keyIsDown(DOWN_ARROW)){
    yMinhaRaquete += 10
  }
}