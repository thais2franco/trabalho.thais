let botao = document.querySelector("#botao");
let mensagem = document.querySelector(".mensagem")

botao.addEventListener("click", mostrarMensagem);

function mostrarMensagem (){
    mensagem.innerHTML="To be a rock and not to roll";
    setTimeout(() => {
        mensagem.innerHTML="";
    }, 3000);
}