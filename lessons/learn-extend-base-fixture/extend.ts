
//Step 1: Understanding Normal Functions
/*First, let's look at a normal function that creates a car.*/
function createCar(brand:string){
    return{
        brand:brand,
        drive: ()=>console.log('Vroom Vroom')
    }
} //✅ This function creates a car with a brand and a drive method.


//Step 2: Adding More Features Manually
/*Now, we want to add a battery for an electric car. With getting brand from createCar()*/
function electricCar(brand:string){
    const car = createCar(brand)
    return{
        ...car,
        charge: ()=>console.log('100%')
    }
}//✅ Here, we manually added a batteryLevel to the car.

const myElectricCar = electricCar('Tesla')
console.log(myElectricCar.brand)
myElectricCar.drive()
myElectricCar.charge()

//Step 3: Making the Function Reusable (extend<T>())
/*We repeated code when extending createCar(). Instead of writing a new function every time, let's make a generic (reusable) function.*/

//What does extend<T>() do?
/*Instead of creating an electric car manually, we create a function that extends any object by
 adding new features.*/

 function extend<T>(baseFunction:(option:T)=>Object){
    return function(extraOptions:T){
        const baseObject = baseFunction(extraOptions)
        return{
            ...baseObject,
            batteryLevel: "100%",
        }
    }
 }

 //Step 4: Using extend<T>()
    /*Now, let's use extend<T>() to create an electric car.*/

    const createElectricCar = extend(createCar)
    const myElectricCar2=createElectricCar('Tesla')