
// Math =  an intrinsic object that provides basic mathematics functionality and constants

let x = 3.14;
let k=3.56;
let y = 5.17;
let z = -9;
let maximum;
let minimum;

//x = Math.round(x);
//x = Math.floor(x);
//x = Math.ceil(x);
//x = Math.pow(x, 2);
//x = Math.sqrt(x);
//x = Math.abs(x);
//maximum = Math.max(x, y, z);
//minimum = Math.min(x, y, z);
//x = Math.PI;
// x=Math.round(x);
// console.log(x);
// k=Math.round(k);
// console.log(k);

// y=Math.floor(y)
// console.log(y);
// y=5.56;

// y=Math.floor(y)
// console.log(y);



let a=0;
let b=0;
let c=0;

document.getElementById("submitButton").onclick = function(){

    a = document.getElementById("aTextBox").value;
    a = Number(a);

    b = document.getElementById("bTextBox").value;
    b = Number(b);

    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

    document.getElementById("cLabel").innerHTML = "Side C: " + c;
}


let count = 0;

document.getElementById("decreaseBtn").onclick = function(){
    count-=1;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("resetBtn").onclick = function(){
    count=0;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("increaseBtn").onclick = function(){
    count+=1;
    document.getElementById("countLabel").innerHTML = count;
}



