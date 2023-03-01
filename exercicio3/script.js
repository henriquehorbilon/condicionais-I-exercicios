function nacionalidadeUser(nacionalidade){
    
    if(nacionalidade === `brasileira`){
        console.log(`Nacionalidade é Brasileira`)
    }else if(nacionalidade === `argentina`){
        console.log(`Nacionalidade é Argentina`)
    }else if(nacionalidade === 'uruguaia'){
        console.log(`Nacionalidade é Uruguaia`)
    }else if(nacionalidade === 'chilena'){
        console.log(`Nacionalidade é Chilena`)
    }else if(nacionalidade === 'colombiana'){
        console.log(`Nacionalidade é Uruguaia`)
    }else{
        console.log(`Nacionalidade não encontrada!`)
    }
}
const nacionalidade = prompt(`Escreva aqui sua nacionalidade:`)
console.log(nacionalidadeUser(nacionalidade.toLowerCase()))