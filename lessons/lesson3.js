//Objects and Arrays


//Objects
var Customer ={
    firstName: 'Fardin',
    lastName: 'Ahosan',
    car:['A','B','C',true,true,10]
}
var det = `My Name is ${Customer.firstName}`
console.log(det)
console.log(Customer)


//Arrays

var so = 'Mr Fardin got '+ +' ' +Customer.car[0]+ ' in the exam. A '+Customer.car[3]+' student he is'
console.log(so)