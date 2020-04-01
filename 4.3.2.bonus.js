const i = 1;
const v = 5;
const x = 10;
const l = 50;
const c = 100;
const m = 1000;
let result = 0;
let resultParc = [];
let input = "XC";
let memA = [];

resultParc=input.toLowerCase().split('');
for(let z=0;z< resultParc.length; z++){
    memA[z]=eval(resultParc[z]);
}
if (memA[0]>memA[(memA.length)-1]){
    for(let z=0;z< resultParc.length; z++){
        result+=memA[z];
    }
    console.log(result);
}else{
    result=memA[(memA.length)-1]
    for(let z=0;z< ((resultParc.length)-1); z++){
        result-=memA[z];
    }
    console.log(result);
}
