// palindromo
let teste=[2, 3, 6, 7, 10, 1];


function indicemaior(array) {
    let maior=0;
    let index=0;
    for (let indice in array){
        if (array[indice]>maior){
            maior=array[indice]
            index=indice;
        }
    }
return index;
}
console.log(indicemaior(teste));