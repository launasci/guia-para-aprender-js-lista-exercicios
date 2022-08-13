/**
 * Percorra a entrada com uma lista de nros e retorne qtos numeros impares/pares
 * 
 * ENTRADA:
 * [1,2,3,4,5,6,7]
 * 
 * SAIDA
 * 4 3
 */

// Entrada
var entrada = [1,2,3,4,5,6,7]
var impares = 0
var pares = 0

for (var aux of entrada){
    if (aux % 2 == 0 ){
        pares++
    }
    else{
        aux % 2 != 0 
        impares ++
    }
}
console.log('temos', impares, 'numeros impares', 'e',pares, 'numeros pares')
