const janela = document.getElementById("janela");

janela.addEventListener("mouseover",abrir);
janela.addEventListener("mouseout",fechar);

function abrir(){
    janela.src = "img2.jpeg";
    document.body.style.background = "#ffeb3b22"
}
function fechar(){
    janela.src = "img.jpeg";
    document.body.style.background = "#222"
}