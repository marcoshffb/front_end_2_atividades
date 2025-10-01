let nomes = ["Ana", "Bruno", "Carla", "Daniel", "Eduardo"];
console.log("Terceiro nome:", nomes[2]);

nomes.push("Fernanda");
nomes.unshift("Lucas");
console.log("Array após adições:", nomes);

nomes.pop(); 
console.log("Array atualizado:", nomes);

let numeros = [2, 4, 6, 8];
let dobrados = numeros.map(num => num * 2);
console.log("Números dobrados:", dobrados);

let numeros2 = [1, 3, 5, 7, 9];
let maioresQue5 = numeros2.filter(num => num > 5);
console.log("Números maiores que 5:", maioresQue5);