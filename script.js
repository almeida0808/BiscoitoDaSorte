const btnBiscoito = document.querySelector(".btnBiscoito")
const tela1 = document.querySelector(".tela1")
const tela2 = document.querySelector(".tela2")
const frase = document.querySelector(".frase p")

let numAleatorio = Math.floor(Math.random() * 19)

let listaFrases = [ //19frases
    "A vida trará coisas boas se tiveres paciência.",
    "Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.",
    "Não compense na ira o que lhe falta na razão.",
    "Defeitos e virtudes são apenas dois lados da mesma moeda.",
    "A maior de todas as torres começa no solo.",
    "Não há que ser forte. Há que ser flexível.",
    "Gente todo dia arruma os cabelos, por que não o coração?",
    "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.",
    "A juventude não é uma época da vida, é um estado de espírito.",
    "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.",
    "Dê toda a atenção para a formação dos teus filhos, sobretudo por exemplos de tua própria vida.",
    "Siga os bons e aprenda com eles.",
    "Não importa o tamanho da montanha, ela não pode tapar o sol.",
    "O bom-senso vai mais longe do que muito conhecimento.",
    "Quem quer colher rosas deve suportar os espinhos.",
    "São os nossos amigos que nos ensinam as mais valiosas lições",
    "Uma iniciativa mal-sucedida não significa o final de tudo. Sempre existe uma nova oportunidade.",
    "Aquele que se importa com o sentimento dos outros, não é um tolo.",
    "A adversidade é um espelho que reflete o verdadeiro eu.",
    "Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos",
]


function gerarFrase(){
frase.innerText = listaFrases[numAleatorio]
}


function TestarSorte(){
    trocarTela()
gerarFrase()
gerarFrase()
}

function trocarTela(){
    tela1.classList.toggle('hide')
    tela2.classList.toggle('hide')
}

//eventos
btnBiscoito.addEventListener('click', TestarSorte)
console.log(numAleatorio)