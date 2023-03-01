function verificaPar(numero1){
    
    if(numero1 % 2 === 0) {
        return `O número é PAR!`
    } else {
        return `O número é ÍMPAR!`
    }
}
const frase = Number(prompt(`Digite um número qualquer:`))
console.log(verificaPar(frase))




