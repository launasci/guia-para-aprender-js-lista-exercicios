/**
 * Faça um Programa que dado um número de entrada,
 * exiba o dia correspondente da semana.
 * 
 * ENTRADA      SAÍDA
 * 1            Domingo
 * 2            Segunda
 * 3            Terça
 * ...
 * 7            Sábado
 * Se digitar outro valor deve aparecer: 'Entrada inválida.'
 */

// Entrada
var entrada = 0
var diaSemana = ['','Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
var numSemana = diaSemana[entrada]

if (entrada > diaSemana.length || entrada == 0){
    console.log('Entrada inválida.')
} else{
    console.log(numSemana)
}

