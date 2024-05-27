var xBolinha = 300;
var yBolinha = 200;
var diametro = 15;
let raio = diametro / 2;

let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0)
    mostrarBolinha();
    movimentarBolinha();
    verificarColisaoDaBolinha();
}

function mostrarBolinha() {
    circle(xBolinha, yBolinha, 50);
}

function movimentarBolinha() {
    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;
}

function verificarColisaoDaBolinha() {
    if (xBolinha + raio > width || xBolinha - raio < 0) {
        velocidadeXBolinha *= -1;
    }

    if (yBolinha + raio > height || yBolinha - raio < 0) {
        velocidadeYBolinha *= -1;
    }
}