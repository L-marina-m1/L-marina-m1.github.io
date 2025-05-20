function feliz(){
    document.getElementById('estado').src='images/h.jpg';
}
function triste(){
    document.getElementById('estado').src='images/s.jpg';
}
function cambiarColor(){
    document.getElementById('subtitulo').style.color='red';
}
function cambiarTexto(){
    document.getElementById('subtitulo').textContent="YA LE SE AL JS";
    document.getElementById('encabezado').style.background= '#ff45b6';}
function mostrarMensaje(){
    console.log("Hola Mundo");
    alert("Esto es un Alert o Alerta");
    let A = 3;
    let B = 4;
    alert(A+B);
    //window.print('Prueba');
}