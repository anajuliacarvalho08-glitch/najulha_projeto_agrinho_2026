let pontos = 0;
let arvores = 0;

function resposta(tipo){

    const msg = document.getElementById("mensagem");

    if(tipo === "certo"){
        pontos += 20;
        msg.innerHTML = "✅ Boa escolha! +20 pontos";
    }else{
        pontos -= 10;
        msg.innerHTML = "❌ Isso prejudica o meio ambiente!";
    }

    document.getElementById("pontos").innerHTML = pontos;
}

function plantar(){
    arvores++;
    pontos += 5;

    document.getElementById("arvores").innerHTML = arvores;
    document.getElementById("pontos").innerHTML = pontos;

    if(arvores === 5){
        alert("🏆 Parabéns! Você ganhou a medalha Guardião da Natureza!");
    }
}
