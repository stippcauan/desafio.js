const lampada = document.getElementById("lampada");

lampada.addEventListener("mouseover",abrir);
lampada.addEventListener("mouseout",fechar);

function abrir(){
    janela.src = "on.png";
    document.body.style.background = "#ffeb3b22"
}
function fechar(){
    janela.src = "on.png";
    document.body.style.background = "#222"
}