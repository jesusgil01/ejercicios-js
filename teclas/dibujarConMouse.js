var areaDibujo = document.getElementById("areaDibujo");
areaDibujo.addEventListener("mousedown", mouseDown);
areaDibujo.addEventListener("mouseup", mouseUp);
areaDibujo.addEventListener("mousemove", mouseMove);

var lienzo = areaDibujo.getContext("2d");
var color = "black";
var x, y;
var estado = false;

function mouseDown(evento) {
    console.log("Down");
    x = evento.layerX;
    y = evento.layerY;
    estado = true;
}

function mouseUp(evento) {
    console.log("Up");
    x = evento.layerX;
    y = evento.layerY;
    estado = false;
}

function mouseMove(evento) {
    if (estado) {
        dibujarLinea(color, x, y, evento.layerX, evento.layerY, lienzo)
    }
    x = evento.layerX;
    y = evento.layerY;
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}