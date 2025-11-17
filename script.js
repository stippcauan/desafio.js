const janela = document.getElementById("janela");
const luz = document.getElementById("luz")

function abrir(){
    janela.src = "janela.a.png";
      document.body.style.background = "#ffeb3b22";
}
function fechar(){
    janela.src = "janela.f.png";
      document.body.style.background = " #000000"
}
function fechar_cortina(){
    janela.src = "cortina.f.png";
      document.body.style.background = " #000000"
}
function abrir_cortina(){
    janela.src = "janela.a.png";
     document.body.style.background = "#ffeb3b22";
}