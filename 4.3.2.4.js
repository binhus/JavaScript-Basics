// palindromo
let teste=['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
let teste2=['ana']


function maiorNome(lista) {
    let maior=0
    for (nomes in lista){
        if(lista[nomes].length>maior){
            maior=lista[nomes].length;
        }
    }
    return maior
}

console.log(maiorNome(teste));
console.log(maiorNome(teste2));