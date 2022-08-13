/**
 * Faça um programa que faça o inverso do programa anterior, ou seja,
 * dado uma entrada criptografada, gere o texto decriptografado 
 * 
 * ENTRADA          SAÍDA
 * bcbduf           abacate
 * @fcsb            zebra
 * $fcsb            Zebra
 * 
 * DICAS:
 * ao invés incrementar, vamos precisar decrementar...
 */

// Entrada
var texto = 'bcbduf'
var textoDecripto=[]
for (i of texto){
    if (i=="z"){
        textoDecripto +="@"
    } else if (i=="Z"){
        textoDecripto +="$"
    }
    else {
        textoDecripto += String.fromCharCode(i.charCodeAt(0)-1)
    }
}
console.log(textoDecripto)

// implemente aqui uma lógica para descriptografar o texto
// var textoDecripto = 'abacate'

// console.log(textoDecripto)
