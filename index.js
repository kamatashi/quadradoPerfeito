// Inteiro positivo
// Raiz quadrada inteira positiva

// Não permitido usar: (Math.sqrt, *, /, **, %)

/*
const nesima_raizq = (numero) => {
	if (numero == 1) return 1
  if (multiplicacao(numero, numero) == 5) return 1
  else return multiplicacao(numero, nesima_raiz(numero-1))
}
*/

const multiplicacao = (base, multiplicador = 2) => {
	if (multiplicador == 0) return 0
  else return base + multiplicacao(base, multiplicador-1)
}

const divisaoInteiro = (numero, divisor, ind = 1) => {
	if (numero == divisor) return 1
  else if (numero < divisor) return 0
  else if (numero == ind) return 
}


const nezima_raiz_Indece = (numero, indice) => {
	if (numero == 1) return 1
  else if (numero == indice) return 1
  else if (numero >= indice) return nezima_raiz_Indece(indice, numero)
  else return nezima_raiz_Indece(numero, indice-1)
}


// Função final
const nesima_raizq = (numero) => {
	if (numero == 1) return 1
  else return multiplicacao(numero, numero)
}




const resultado = nesima_raizq(9)

console.log(resultado)
