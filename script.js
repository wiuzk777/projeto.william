
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Como você imagina que a inteligência artificial estará presente na vida das pessoas no futuro?",
        alternativas: [
            {
                texto: "Ajudando em tarefas do dia a dia, nos estudos e no trabalho.",
                afirmacao: "Você acredita que a inteligência artificial poderá facilitar muitas atividades e melhorar a qualidade de vida."
            },
            {
                texto: "Substituindo completamente as pessoas em diversas atividades.",
                afirmacao: "Você percebeu que o avanço da tecnologia também pode trazer desafios para a sociedade e para o mercado de trabalho."
            }
        ]
    },
    {
        enunciado: "Você acredita que a inteligência artificial poderá transformar a educação?",
        alternativas: [
            {
                texto: "Sim, oferecendo aulas personalizadas e ajudando os alunos a aprender.",
                afirmacao: "Você reconheceu que a IA pode tornar a educação mais acessível e adaptada às necessidades de cada estudante."
            },
            {
                texto: "Não, porque a tecnologia não consegue substituir completamente os professores.",
                afirmacao: "Você entendeu que a presença dos professores continua sendo fundamental para a educação, mesmo com os avanços tecnológicos."
            }
        ]
    },
    {
        enunciado: "Imagine que robôs com inteligência artificial comecem a realizar tarefas em hospitais. Qual seria sua opinião?",
        alternativas: [
            {
                texto: "Seria positivo, pois poderiam ajudar médicos e melhorar os atendimentos.",
                afirmacao: "Você percebeu que a inteligência artificial pode contribuir para avanços importantes na área da saúde."
            },
            {
                texto: "Seria preocupante, pois decisões importantes precisam de acompanhamento humano.",
                afirmacao: "Você compreendeu que a tecnologia precisa ser utilizada com responsabilidade e supervisão humana."
            }
        ]
    },
    {
        enunciado: "Se a inteligência artificial pudesse criar novas profissões no futuro, o que você faria?",
        alternativas: [
            {
                texto: "Estudaria e desenvolveria novas habilidades para acompanhar as mudanças.",
                afirmacao: "Você entendeu que a educação e a adaptação serão importantes para as profissões do futuro."
            },
            {
                texto: "Continuaria utilizando apenas os conhecimentos que já tenho.",
                afirmacao: "Você percebeu que o mercado de trabalho está em constante transformação e exige aprendizado contínuo."
            }
        ]
    },
    {
        enunciado: "Qual deve ser a principal preocupação da humanidade ao desenvolver inteligências artificiais cada vez mais avançadas?",
        alternativas: [
            {
                texto: "Garantir que a tecnologia seja segura, ética e beneficie toda a sociedade.",
                afirmacao: "Você reconheceu que o desenvolvimento da inteligência artificial deve priorizar a segurança, a ética e o bem-estar das pessoas."
            },
            {
                texto: "Desenvolver tecnologias cada vez mais rápidas e poderosas, sem pensar nos riscos.",
                afirmacao: "Você percebeu que o avanço tecnológico precisa ser acompanhado de responsabilidade para evitar consequências negativas."
            }
        ]
    }
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

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;

        botaoAlternativas.addEventListener("click", () => {
            respostaSelecionada(alternativa);
        });

        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    historiaFinal += opcaoSelecionada.afirmacao + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "O futuro da IA está em nossas mãos!";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
