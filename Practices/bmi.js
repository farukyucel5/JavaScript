
// let weight =Number(prompt("pass in your weight"));

// let height =Number(prompt("pass in your height"));


// function kontrolet(w,h){



// let result =w/h**2;



// if(result<18.5){
//     alert("You are underweighted "+ result)

// }else if(result>18.5 && result<24.5){

//     alert("you are fit " + result)

// }
// else{
//     alert("you are overweighted "+ result)
// }

// }

// kontrolet(weight,height);

// let array=["a", "b", "c", "d", "e", "f"];
// let concat=''

// array.forEach(function(each){
//     debugger;
//     concat+=each

// });

// console.log(concat)
//------------------------------------------------destructor-------------------------------\\
// let object ={
//     width : 12,
//     height: 20,
//     depth : 5
// }


// let {width:en,height:boy,depth:derinlik}=object

// console.log(en,boy,derinlik)

// let arr= ["AHMET","BERAT","CEVDET","DENIZ","FARUK"]

// let A,B,C,D,E,F

// [A,B,C,D,E,F]=arr

// console.log(A,B,C,D,E,F)

// const calculate= (par1,par2)=>{
//     const sum = par1+par2
//     const substraction =par1-par2
//     const multiplication=par1*par2
//     const division= par2!=0 ? par1/par2 : console.log("undefined")
//     const arr = [sum,substraction,multiplication,division]

//     return arr
// }

// let [a,b,c,d]=calculate(10,0)

// console.log(a,b,c,d)

//--------------------------------spread,foreach,for in ,for of --------------------------------\\



// let names =["AHMET","BERAT","CEVDET","DENIZ","FARUK"]


// function addition(a,b,c,d) {

//     console.log(a+b+c+d)

// }

// addition(...names)//spread operator


// names.forEach(names => console.log(names))
// console.log("--------------------------------")

// names.forEach(name => {
//     if(name.toLowerCase().includes("A".toLowerCase())){
//         console.log(name)
//     }

// })

// console.log("--------------------------------")

// for(let name in names){
//     console.log("index of "+names[name]+" is "+name)//it provides the index
// }

// console.log("--------------------------------")

// for(let name of names){
//     console.log("index of "+name+" is "+names.indexOf(name))//it provides the value 
// }

//----------------------------------maps------------------------------------\\

const map1 = new Map();

//SET
// map1.set(1,"Enes")
// map1.set(true,5)
// map1.set([1,2,3],{firstName : "Enes", lastName :"Bayram"})
// map1.set(true,"5")
let value;
// map1.set(34,"İstanbul")
// map1.set(35,"İzmir")
// map1.set(06,"Ankara")
// map1.set(01,"Adana")


//GET
// console.log(map1.get(6))
// console.log(map1.get(34))
// console.log(map1.get(35))


//SİZE
// value = map1.size;

//DELETE
// value = map1.delete(34)
// console.log(map1.size)
// console.log(value);


//HAS
// console.log(map1.has(55))


//For OF map üzerinde dönebiliriz.

// for(let [key,value] of map1){ // Destructing
//     console.log(key,value)
// }


// const keys = Array.from(map1.keys())
// keys.forEach((key)=>{
//     console.log(key, map1.get(key))
// })


// for(let key of map1.keys()){
//     console.log(key)
// }


// for(let value of map1.values()){
//     console.log(value)
// }


// let array = [1,2,3,4,5,6];


//MAPTEN ARRAY'E ÇEVİRMEK

// const array = Array.from(map1);

// array.forEach((value)=>{
//     console.log(value[0] , value[1])
// })


//ARRAY 'İ MAP E CEVİRMEK

// const array2 = [
//     [34,"İstanbul"],
//     [35,"İzmir"],
//     [06,"Ankara"],
//     [01,"Adana"]
// ]

// const myMap = new Map(array2);

// const myArray = Array.from(myMap);
// console.log(myArray)

let key = {username:"Enes"};

map1.set(34,"İstanbul")
map1.set(35,"İzmir")
map1.set(06,"Ankara")
map1.set(01,"Adana")
map1.set(key, "Obje")


console.log(map1.get(key))
console.log(map1.get(35))


//SET

const set = new Set();

//add metodu

set.add(true)
set.add(3.14)
set.add("Enes")
// set.add("Enes")
// set.add("Enes")
// set.add("Enes")
// set.add("Enes")
// set.add("Enes")
set.add(7)
set.add({username:"enes" , password : "1"});
set.add([1,2,3,4])


console.log(set)

//Size
// console.log(set.size)


//delete

// set.delete("Enes")
// set.delete(7)
// set.delete([1,2,3,4])
// console.log(set.size)


//Has
// console.log(set.has("Ali"))

//For of döngüsü
// for(let value of set){
//     console.log(value)
// }

// const values = Array.from(set);
// values.forEach((value)=>{
//     console.log(value)
// })


//SET DEN ARRAY OLUŞTURMA
// const values = Array.from(set);


//ARRAY DEN SET OLUŞTURMAK

// let array = [1,"Enes",true,"Mustafa",15,[1,2,3]]

// const newSet = new Set(array);
// console.log(newSet)


//--------------Template literal--------------------------------\\


let ageCalculation=(dateOfBirth)=>{

    const d = new Date();
    let recentYear = d.getFullYear();

    console.log(`your age is ${recentYear-dateOfBirth}`)


}

ageCalculation(1994)