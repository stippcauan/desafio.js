const janela = document.getElementById("janela");

janela.addEventListener("mouseover",abrir);
janela.addEventListener("mouseout",fechar);

function abrir(){
    janela.src = "img2.jpeg";
    
function fechar(){
    janela.src = "img.jpeg";
}
}