//Declarative function
function hello(){
    console.log('Hello')
}

//Annonymus function
var a = function(){
    console.log('Hello')
}

//Annonymus function - ES6
var ab = () => {
    console.log('AB')
}


//Function With arguments
function printmyname(a,b){
 if (a<b){
    console.log(a)
 }else{
    console.log(b)
 }
}
printmyname(2,4)