function hello(){
    console.log('hello guys')
}
hello()


// fillter function

let age=[10,20,15,25];
let result=age.filter(checkAge);

function checkAge(age){
    return age<=18
}
console.log(result)