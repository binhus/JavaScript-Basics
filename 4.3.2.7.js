let word="Trybe"
let ending="be"

function verificaFimPalavra(palavra,final){
    let palavraFinal="";
    let indexPalavra=palavra.length;
    let indexFinal=final.length;
    if(indexFinal>indexPalavra){
        return false;
    }
    for(let i=0;i<((indexPalavra-indexFinal)-1);i++){
        palavraFinal+=palavra[(indexPalavra-indexFinal)+i];
    }
    
    if(final==palavraFinal){
        return true;

    }else{
        return false;

    }
}
console.log(verificaFimPalavra(word,ending));