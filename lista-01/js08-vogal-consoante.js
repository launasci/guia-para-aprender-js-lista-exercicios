/**
 * Faça um Programa que verifique se uma letra 
 * de entrada é vogal ou consoante.
 * 
 * Entrada           Saída
 * a                 vogal
 * I                 vogal
 * z                 consoante
 * J                 consoante
*/

// Entrada
var entrada = 'a'
var vogal = ['a', 'e', 'i', 'o', 'u']
var resultado = vogal.includes(entrada)
if (resultado === true){
    console.log('vogal')
} else{
    console.log('consoante')
}
