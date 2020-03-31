
let teste=[2, 3, 2, 5, 8, 2, 3];
let itemAtual=0;
let countRepeat=0;
let countRepeatb=0;
let ordenado= null;

function modaDoRobson(lista) {
    let moda=0;
    ordenado=lista.sort();
    itemAtual=lista[0];
    moda=itemAtual    
    for(let i=0;i<lista.length;i++){
        if(countRepeat==countRepeatb){
            countRepeatb=0;
            moda=ordenado[i];
            itemAtual=ordenado[i];
            countRepeat++
        }else{
        if(itemAtual==lista[i]){
            countRepeat++;
            lista[i]=moda;
        }
        else {
            if(countRepeat>countRepeatb){
                if (ordenado[i]==ordenado[i+1]){
                    countRepeatb++;
                }else if(i==lista.length-1){
                    countRepeatb++;
                }

                }   
            }
        }
    }

    countRepeatb=0;
    countRepeat=0;
    itemAtual=0;
    return moda;
}
    console.log(modaDoRobson(teste));
