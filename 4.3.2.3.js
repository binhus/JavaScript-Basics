// palindromo
let teste=[2, 4, 6, 7, 10, 0, -3];
let menor= teste[0];
let index= teste[0];

function indicemenor(array) {

for (let indice in array){
    if (array[indice]<menor){
        menor=array[indice]
        index=indice;
    }
}
return index;
}
indicemenor(teste);
console.log(index);