
//objects

var customer={
    firstname: 'John',
    lastname: 'Doe',
    car:['volvo','Bmw','dacia']
}

console.log(customer.firstname)
console.log(customer.lastname)
console.log(customer['firstname'] + ' ' + customer['lastname'])
console.log(`${customer.firstname} ${customer.lastname}`)
console.log(customer.car[1])
console.log(customer.car[0])

//comparission
console.log('========================================')

var x=1

console.log(x==1)//lose comparission: it will only validate the value of the data
console.log(x==='1')//strict comparission: it will  validate both value  and data type of the variables



for(let each of customer.car){//for of loop
    console.log(each)
}

customer.car.forEach(each => console.log(each))//ES6 syntax for each loop


//functions

helloOne()//you can write it before the function down below

function helloOne(){
    console.log("helloOne")//declarative function 
}

helloOne()//you can write it  after the function above

//anoymus functions

var helloTwo = function(){

    console.log("helloTwo")

}
helloTwo()//you cannot write it before the function 


//ES6 functions or arrow functions

var helloThree = ()=>{

    console.log("helloThree")

}
helloThree()



