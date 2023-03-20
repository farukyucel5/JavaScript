
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

let object ={
    width : 12,
    height: 20,
    depth : 5
}


let {width:en,height:boy,depth:derinlik}=object

console.log(en,boy,derinlik)

let arr= ["AHMET","BERAT","CEVDET","DENIZ","FARUK"]

let A,B,C,D,E,F

[A,B,C,D,E,F]=arr

console.log(A,B,C,D,E,F)

const calculate= (par1,par2)=>{
    const sum = par1+par2
    const substraction =par1-par2
    const multiplication=par1*par2
    const division= par2!=0 ? par1/par2 : console.log("undefined")
    

    const arr = [sum,substraction,multiplication,division]

    return arr

}

let [a,b,c,d]=calculate(10,0)

console.log(a,b,c,d)

