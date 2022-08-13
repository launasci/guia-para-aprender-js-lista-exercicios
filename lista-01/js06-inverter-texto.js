/**
 * Faça um Programa que inverta um texto. 
 * 
 * ENTRADA          SAÍDA
 * abacate          etacaba
 * 12345            54321
 * 
 */

// Entrada
var entrada = 'abacate'
var contador = 1
var invertido = ''

for (var indice of entrada){
invertido += entrada[entrada.length - contador]
contador ++
}
console.log(invertido)
// // gere a variável invertido de forma a transforma a entrada na saída esperada
// var invertido = 

// console.log(invertido)
