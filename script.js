const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você sempre pode escolher seus estilos de moda,como se sentir bem. Qual o primeiro pensamento sobre isso?",
        alternativas: [
            {
                texto: "Como posso escolher meu estilo de moda?",
                afirmacao: "No início você ficara indeciso(a) com varios estilos ,mais deve escolher com o que mais se indentifica. "
            },
            {
                texto: "Quais são as Peças Essenciais No Guarda-Roupa? ",
                afirmacao: "São aquelas peças que você consegue combinar com tudo e que ao mesmo tempo trazem estilo para o look ."
            }
        ]
    },
    {
        enunciado: "Conceito sobre seu estilo de moda.",
        alternativas: [
            {
                texto: "Qual é a maior dificuldade que você enfrenta ao escolher roupas para o seu dia a dia?",
                afirmacao: "Fazer combinações de roupas e cores."
            },
            {
                texto: "Como você se sente ao olhar para o seu armário?",
                afirmacao: "Não muito agradavel."
            }
        ]
    },
    {
        enunciado: "Soluções para se vestir bem",
        alternativas: [
            {
                texto: "Como se vestir bem?.",
                afirmacao: "Compre peças novas."
            },
            {
                texto: "Como se vestir bem.",
                afirmacao: "Sua preocupação com as pessoas motivou a criar um grupo de estudos entre trabalhadores para discutir meios de utilização de IA de forma ética."
            }
        ]
    },
    {
        enunciado: "combinação",
        alternativas: [
            {
                texto: "Preciso combinar a bolsa com os sapatos e cinto? .",
                afirmacao: " Não mais. Atualmente, costumamos variar os modelos de sapatos com muita frequência, mas o mesmo não acontece com as bolsas. Mesmo assim, se você gosta de combinar esses três elementos, pode continuar a fazer, o importante é se sentir bem com cada escolha"

            
            },
            {
                texto: "Eu devo me vestir conforme cada ambiente que eu frequentar ou devo manter o meu estilo custe o que custar?",
                afirmacao: "É possível adequar a sua vestimenta a cada ambiente que você for sem que você perca o seu estilo. Existem lugares com o Dress code definido, principalmente empresas, portanto, é indicado que você o siga para não destoar dos demais e se sentir deslocado. "
            }
        ]
    },
    {
        enunciado: " loja",
        alternativas: [
            {
                texto: " Que lojas eu mais gosto de visitar?.",
                afirmacao: "Acreditamos que você tenha uma loja predileta ."
            },
            {
                texto: " Como achar a essência do meu estilo pessoal?.",
                afirmacao: " Estilo pessoal não é algo que a gente inventa a partir de uma cartilha, é algo que encontramos dentro do nosso armário e passamos a refinar de acordo com os nossos objetivos . "
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
    const afirmacoes = opcaoSelecionada.afirmacao;
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