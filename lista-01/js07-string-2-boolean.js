/**
 * Faça um programa que retorne true ou false conforme a entrada Y,y,yes,S,sim
 * 
 * ENTRADA          SAÍDA
 * Y                         true
 * Yes, YES, yes             true
 * y                         true
 * S, SIM                    true
 * s, sim, Sim               true
 * 1                         true
 *👍                         true
 * n,N,J,0, espaço           false
 * qualquer outra coisa, $   false
 */

// Entrada
var listatrue = ['Y', 'Yes', 'YES', 'yes', 'y', 's', 'sim', 'Sim', '1', '👍']
var entrada = 'yes'
var resultado = listatrue.includes(entrada)
console.log(resultado)