const ingresso = 10
const ingressoVip = 15
const ingressoEstudante = 5
var nome = []
var tipo = []
//var ingressosTotal  = Number(prompt("Digite a quantidade de ingressos vendidos: "))

var somatorio = 0

let fim = 0

while (fim  != true ) {
    nome = prompt("Digite o nome do comprador:")
    tipo = prompt("Digite o numero do tipo de ingresso, sendo os tipos 1-Normal, 2- VIP, 3-Estudante. Para finalizer digite 'pronto' ")
 fim = tipo.includes("pronto")
    console.log(tipo)
}
console.log("deu")

/*<!doctype html><html><head></head><body><script type="text/javascript">//cálculo de média para "N" notas escolares

//"N" notas
let notas = []
let nNotas = Number(prompt("DIGITE A QUANTIDADE DE NOTAS: "))
let somatorio = 0
let media = 0

for (let iNotas = 0; iNotas < nNotas; iNotas++) {
  notas [iNotas] = Number(prompt(`DIGITE A NOTA Nº ${iNotas+1}: `))
  somatorio = somatorio + notas[iNotas] //soma das notas
}

/*
//teste para conferir se todas as notas digitadas estão armazenadas corretamente:
for (let iNotas = 0; iNotas < nNotas; iNotas++) {
  console.log(notas[iNotas])
}


media = somatorio / nNotas
console.log(`A SUA MÉDIA É ${media}!`)

//iNotas = indíce de notas, vai indicar a possição
//nNotas = número total de notas

</script></body><html></html>*/