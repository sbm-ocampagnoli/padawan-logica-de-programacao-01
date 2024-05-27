var xBolinha = 100;
var yBolinha = 100;
var diametro = 15;
let raio = diametro / 2;

let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

let xRaquete = 5;
let yRaquete = 150;
let comprimentoDaRaquete = 10;
let alturaDaRaquete = 90;

let colidiu = false;

let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

let meusPontos = 0;
let pontosDoOponente = 0;

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0)
    mostrarObjetos();
}

function mostrarObjetos() {
    mostrarBolinha();
    verificarColisaoDaBolinha();
    movimentarBolinha();
    mostrarRaquete(xRaquete, yRaquete);
    movimentarMinhaRaquete();
    verificarColisaoRaquete(xRaquete, yRaquete);
    mostrarRaquete(xRaqueteOponente, yRaqueteOponente);
    movimentarRaqueteDoOponente();
    verificarColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
    incluirPlacar();
    marcarPonto();
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

function mostrarRaquete(x, y) {
    rect(x, y, comprimentoDaRaquete, alturaDaRaquete);
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

function verificarColisaoRaquete(x, y) {
    colidiu = collideRectCircle(x, y, comprimentoDaRaquete, alturaDaRaquete, xBolinha, yBolinha, raio);
    if (colidiu) {
        velocidadeXBolinha *= -1;
    }
}

function movimentarRaqueteDoOponente() {
    velocidadeYOponente = yBolinha - yRaqueteOponente - comprimentoDaRaquete / 2 - 30;
    yRaqueteOponente += velocidadeYOponente
}

function incluirPlacar() {
    fill(255)
    text(meusPontos, 278, 26);
    text(pontosDoOponente, 321, 26);
}

function marcarPonto() {
    if (xBolinha > 590) {
        meusPontos += 1;
    }
    else if (xBolinha < 10) {
        pontosDoOponente += 1;
    }
}