/**
 * Faça um programa que gere apenas os números ímpares entre 1 e 150. 
 * 
 * ENTRADA              SAÍDA
 * [1,150]              [1,3,5,7,9,11...147,149]
 * 
 */

// Entrada
var entrada = [1, 150]
var impares = 0 

for (var n in entrada){
    while (n < 150){
        n ++ 
        if (n % 2 != 0){
            console.log(n)
            n ++
        }
        else{
            break
        }        
    }
}