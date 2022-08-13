/**
 * Faça um programa que faça a soma de todos os números de uma lista de números
 * 
 * ENTRADA              SAÍDA
 * [1,3,5,7,8,10]        5.7
 * [1,1,40]             14.0
 */

// Entrada
var entrada = [1,1,40]

var soma = 0
for (var n in entrada){
    soma += entrada[n]
}

// percorrer a lista e fazer a somatória dos elementos

let media = soma / entrada.length

console.log(media.toFixed(1))
