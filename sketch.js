var xBolinha = 300;
var yBolinha = 200;
var diametro = 15;
let raio = diametro / 2;

let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

let xRaquete = 5;
let yRaquete = 150;
let comprimentoDaRaquete = 10;
let alturaDaRaquete = 90;

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0)
    mostrarObjetos();
}

function mostrarObjetos() {
    mostrarBolinha();
    mostrarRaquete();
}

function mostrarBolinha() {
    circle(xBolinha, yBolinha, 50);
    verificarColisaoDaBolinha();
    movimentarBolinha();
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

function mostrarRaquete() {
    rect(xRaquete, yRaquete, comprimentoDaRaquete, alturaDaRaquete);
    movimentarMinhaRaquete();
    verificarColisaoDaRaquete();
}

function movimentarMinhaRaquete() {
    if (keyIsDown(UP_ARROW)) {
        yRaquete -= 10;
    }
    if (keyIsDown(DOWN_ARROW)) {
        yRaquete += 10;
    }
}

function verificarColisaoDaRaquete() {
    if (xBolinha - raio < xRaquete + comprimentoDaRaquete
        && yBolinha - raio < yRaquete + alturaDaRaquete
        && yBolinha + raio > yRaquete) {
        velocidadeXBolinha *= -1;
    }
}