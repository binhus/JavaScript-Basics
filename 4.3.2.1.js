// palindromo
let string="arara"
let converted=""
function convert(info){
    converted=info.split('').reverse().join('')
    if(converted===info){
        return true
    }else{
        return false
    }

}
if (convert(string)){
    console.log("sim");
}else{
    console.log("não");
}