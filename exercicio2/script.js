
const verificarPessoa = (idade, ensinoMed, cursandoFac) => {
    if(idade >= 18){
        console.log(`Tem 18 anos ou mais`)
    }else{
        console.log(`A pessoa é menor de idade`)
    }
    if(ensinoMed === true){
        console.log(`Terminou o Ensino Médio`)
    }else{
        console.log(`NÃO Terminou o Ensino Médio`)
    }
    if(!cursandoFac){
        console.log(`Não está cursando faculdade`)
    }else{
        console.log(`Está cursando Facul`)
    }
}

verificarPessoa(19,true,true)