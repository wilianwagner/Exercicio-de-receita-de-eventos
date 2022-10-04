
//Definição do valor do ingresso
const ingresso = 10
const ingressoVip = 15
const ingressoEstudante = 5

//definição e contagem dos tipos de ingresso
var contNor = 0
var contVip = 0
var contEst = 0

//variaveis de entrada
var nome = []
var tipo = []

//variavel utilizada para fim de entrada de informações
let fim = 0
//variavel para arrecadação total
let total = 0

//inserção de dados  através de um loop
for (let i = 0; fim != true; i++) {
  nome[i] = prompt("Digite o nome do comprador:")
  console.log(nome)
  tipo[i] = prompt("Digite o numero do tipo de ingresso, sendo os tipos 1-Normal, 2- VIP, 3-Estudante. Para finalizer digite 'pronto' ")
  fim = tipo.includes("pronto")
  console.log(tipo)
}

//contagem do tipo de ingresso
for (let i = 0; i < tipo.length; i++) {
  if (tipo[i] === "1") { contNor++; }
}
console.log(contNor)

//contagem do tipo de ingresso
for (let i = 0; i < tipo.length; i++) {
  if (tipo[i] === "1") { contEst++; }
}
console.log(contEst)

//contagem do tipo de ingresso
for (let i = 0; i < tipo.length; i++) {
  if (tipo[i] === "1") { contVip++; }
}
console.log(contVip)

//Calculo de arrecadação total
total = (contEst * ingressoEstudante) + (contNor * ingresso) + (contVip * ingressoVip)

//impressão de cada arrecadação
console.log(`Arrecadação total foi de R$ ${total}`)
console.log(`Arrecadação de Ingressos normais foi de : $ ${contNor * ingresso}`)
console.log(`Arrecadação de Ingressos Vip foi de : $ ${contVip * ingressoVip}`)
console.log(`Arrecadação de Ingressos Estudante foi de : $ ${contEst * ingressoEstudante}`)