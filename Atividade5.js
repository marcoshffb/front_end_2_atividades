//Questão 1
let populacaoA = 80000;
let populacaoB = 200000;

const taxaA = 0.03;
const taxaB = 0.015;

let anos = 0;

while (populacaoA <= populacaoB) {
  populacaoA += populacaoA * taxaA;
  populacaoB += populacaoB * taxaB;
  anos++;
}

console.log("Número de anos necessários:", anos);
console.log("População de A:", Math.floor(populacaoA));
console.log("População de B:", Math.floor(populacaoB));

//Questão 2
let pares = 0;
let impares = 0;

for (let i = 1; i <= 10; i++) {
  let numero = parseInt(prompt(`Digite o ${i}º número inteiro:`));

  if (numero % 2 === 0) {
    pares++;
  } else {
    impares++;
  }
}

console.log("Quantidade de números pares: ", pares, "Quantidade de números ímpares: ", impares);

//Questão 3
let N = parseInt(prompt("Quantos números você quer informar?"));

let soma = 0;
let menor = Infinity;
let maior = -Infinity;

for (let i = 1; i <= N; i++) {
  let numero = parseFloat(prompt(`Digite o ${i}º número:`));
  soma += numero;

  if (numero < menor) {
    menor = numero;
  }
  if (numero > maior) {
    maior = numero;
  }
}

console.log("Menor valor:", menor);
console.log("Maior valor:", maior);
console.log("Soma dos valores:", soma);

//Questão 4
//Versão salátio fixo
let salario = 1000;
let percentual = 0.0015;
const anoInicial = 1995;
const anoAtual = new Date().getFullYear();

for (let ano = anoInicial + 1; ano <= anoAtual; ano++) {
  salario += salario * percentual;
  percentual *= 2;
}

console.log("Salário atual do funcionário:", salario.toFixed(2));
//Versão do usuário
let salario = parseFloat(prompt("Digite o salário inicial do funcionário:"));
let percentual = 0.0015;
const anoInicial = 1995;
const anoAtual = new Date().getFullYear();

for (let ano = anoInicial + 1; ano <= anoAtual; ano++) {
  salario += salario * percentual;
  percentual *= 2;
}

console.log("Salário atual do funcionário:", salario.toFixed(2));

//Questão 5
function calcularCirculo() {
  let raio = parseFloat(prompt("Digite o raio do círculo:"));

  if (raio <= 0 || isNaN(raio)) {
    console.log("Por favor, digite um número válido maior que zero.");
    return;
  }

  let area = Math.PI * raio * raio;
  let perimetro = 2 * Math.PI * raio;

  console.log("Raio:", raio);
  console.log("Área do círculo:", area.toFixed(2));
  console.log("Perímetro do círculo:", perimetro.toFixed(2));
}

calcularCirculo();

//Questão 6
function calcularInvestimento() {
  let capital = parseFloat(prompt("Digite o capital inicial (C):"));
  let taxa = parseFloat(prompt("Digite a taxa de juros mensal em % (i):"));
  let tempo = parseInt(prompt("Digite o tempo do investimento em meses (t):"));

  if (isNaN(capital) || isNaN(taxa) || isNaN(tempo) || capital < 0 || tempo < 0) {
    console.log("Por favor, insira valores válidos e positivos.");
    return;
  }

  let i = taxa / 100;

  let montante = capital * Math.pow((1 + i), tempo);

  console.log(`Montante após ${tempo} meses: R$ ${montante.toFixed(2)}`);
}

calcularInvestimento();