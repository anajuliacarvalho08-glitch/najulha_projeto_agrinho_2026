let pontos = 0;
let arvores = 0;

const perguntas = [
    {
        pergunta: "O que fazer com uma garrafa plástica?",
        opcoes: [
            { texto: "Jogar no chão", valor: -10 },
            { texto: "Reciclar", valor: 20 },
            { texto: "Queimar", valor: -10 }
        ]
    },
    {
        pergunta: "Como economizar água?",
        opcoes: [
            { texto: "Banho de 30 min", valor: -10 },
            { texto: "Banho rápido", valor: 20 },
            { texto: "Deixar torneira aberta", valor: -10 }
        ]
    },
    {
        pergunta: "O que ajuda o meio ambiente?",
        opcoes: [
            { texto: "Desmatar", valor: -10 },
            { texto: "Plantar árvores", valor: 20 },
            { texto: "Poluir rios", valor: -10 }
        ]
    }
];

let atual = 0;

function carregarPergunta(){

    const p = document.getElementById("pergunta");
    const botoes = document.getElementById("botoes");

    const q = perguntas[atual];

    p.innerText = q.pergunta;

    botoes.innerHTML = "";

    q.opcoes.forEach(op => {

        const btn = document.createElement("button");

        btn.innerText = op.texto;

        btn.onclick = () => {

            pontos += op.valor;

            document.getElementById("pontos").innerText = pontos;

            document.getElementById("mensagem").innerText =
                op.valor > 0 ? "✅ Boa escolha!" : "❌ Escolha ruim!";

            atual++;

            if(atual < perguntas.length){
                carregarPergunta();
            } else {
                document.getElementById("pergunta").innerText = "Fim do jogo!";
                document.getElementById("botoes").innerHTML = "";
            }
        };

        botoes.appendChild(btn);
    });
}

function plantar(){
    arvores++;
    pontos += 5;

    document.getElementById("arvores").innerText = arvores;
    document.getElementById("pontos").innerText = pontos;
}

carregarPergunta();
