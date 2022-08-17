// Funções auxiliadoras
const multiplicacao = (base, multiplicador = 2) => {
	if (multiplicador == 0) return 0
  else return base + multiplicacao(base, multiplicador-1)
}


const ehInteiro = numero => divisor => {
  // Caso base
  if (numero == 0) return 0
  else if (numero == 1) return 1
  else if (numero == divisor) return 1
  else if (numero < divisor) return 'O divisor é maior que o numerador. O resultado não seria um número inteiro.'
  else return ehInteiro(numero)(divisor + 1)
}


// Função final
const nesima_raizq = numero => {
  // Caso base
  if (numero == 0) return 'Digite outro número além de zero!'
  if (numero == 1) return 1
  if (numero < 0) return 'Por favor, insira um número inteiro positivo!'

  // Caso o número retorn 1, então ele é inteiro, caso contrario, não é
  // Usei o dois para simplificar a operação, em vez de coloca-lo fixo na função auxiliar
  if (ehInteiro(numero)(2) != 1) return 'Por favor, insira um número inteiro!'

  // E então a função usa a função recusiva axiliar mutiplicacao para encontrar o número perfeito na posição selecionada
  else return `${multiplicacao(numero, numero)} é o número perfeito da posição ${numero}.`
}


console.log(nesima_raizq(3))
console.log(nesima_raizq(9))
console.log(nesima_raizq(-9))
console.log(nesima_raizq(5.3))
console.log(nesima_raizq(539))
console.log(nesima_raizq(0))
