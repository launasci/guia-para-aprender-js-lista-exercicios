/**
 * Faça um programa que mostre o segundo maior número da lista 
 * 
 * ENTRADA              SAÍDA
 * [1,3,5,7,8,10,3]      8
 * [1,1,40]              1
 * [40,42,1,0,-10]      40
 * 
 * IMPORTANTE:
 * Não usar sort
 * Não usar funções built-ins da linguagem
 */

// Entrada
var entrada = [1, 40, 42,1,0,-10]
var maior = 0
var segundoMaior = 0 

for (var aux of entrada){
    if (aux > maior){
        maior = aux
    }
    if (aux < maior && aux > segundoMaior){
        segundoMaior = aux
    }
}

console.log(segundoMaior)


