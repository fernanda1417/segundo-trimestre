

const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você costuma fumar",
        alternativas: [
            {
                texto: "Sim",
                afirmação: "È vicio antigo. "
            },
            {
                texto: "Não",
                afirmação: "Isso faz mal a saude. "
            }
        ]
    },
    {
        enunciado: "Você gosta de estudar?",
        alternativas: [
            {
                texto: "Sim ",
                afirmação: "Para ter um futuro. "
            },
            {
                texto: "Não ",
                afirmação: "Não me leva a nada. "
            }
        ]
    },
    {
        enunciado: "Você costuma sair?"
        alternativa: [
            {
                texto: "Sim.",
                afirmação: "afirmação."
            },
            {
                texto: "Não",
                afirmação: "afirmação."
            }
        ]
    },
    {
        enunciado: "Você gosta de socializar?",
        alternativas: [
            {
                texto: "Sim.",
                afirmação: "afirmação."
            },
            {
                texto: "Não.",
                afirmação: "afirmação."
            }
        ]
    },
    {
        enunciado: "Você costuma ter uma boa noite de sono?",
        alternativas: [
            {
                texto: "Sim",
                afirmação: "afirmação"
            },
            {
                texto: "Não",
                afirmação: "afirmação. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmação;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();