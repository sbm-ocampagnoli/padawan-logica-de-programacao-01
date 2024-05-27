var xBolinha = 100;
var yBolinha = 100;
var diametro = 13;
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

let raquetada, ponto, trilha;

function preload() {
    trilha = loadSound("./trilha.mp3");
    raquetada = loadSound("./raquetada.mp3");
    ponto = loadSound("./ponto.mp3");
}

function setup() {
    createCanvas(600, 400);
    trilha.loop();
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
        raquetada.play();
    }
}

function movimentarRaqueteDoOponente() {
    velocidadeYOponente = yBolinha - yRaqueteOponente - comprimentoDaRaquete / 2 - 30;
    yRaqueteOponente += velocidadeYOponente
}

function incluirPlacar() {
    stroke(255);
    textAlign(CENTER);
    textSize(16);
    fill(color(255, 140, 0));
    rect(150, 10, 40, 20);
    fill(255);
    text(meusPontos, 170, 26);
    fill(color(255, 140, 0));
    rect(450, 10, 40, 20);
    fill(255);
    text(pontosDoOponente, 470, 26);
}

function marcarPonto() {
    if (xBolinha > 590) {
        meusPontos += 1;
        ponto.play();
    }
    else if (xBolinha < 10) {
        pontosDoOponente += 1;
        ponto.play();
    }
}