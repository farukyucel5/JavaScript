let answer = Math.floor(Math.random() * 10 + 1);
let guesses = 0;

document.getElementById("submitButton").onclick = function (){

  let guess = document.getElementById("guessField").value
  guesses+=1;
  
  if(guess == answer){
    alert(`${answer} is the correct answer. It took you ${guesses} guesses`);
    document.getElementById("submitButton")

  }
  else if(guess < answer){
    alert("Too small!");
  }
  else{
    alert("Too large!");
  }
}

document.getElementById("resetBtn").onclick=function(){
 
  window.location.reload()
 

}


document.getElementById("submitButton1").onclick = function(){

  let temp;

  if(document.getElementById("cButton").checked){
      temp = document.getElementById("textBox").value;
      temp = Number(temp);
      temp = toCelsius(temp);
      document.getElementById("tempLabel").innerHTML = temp + "°C";
  }
  else if(document.getElementById("fButton").checked){
      temp = document.getElementById("textBox").value;
      temp = Number(temp);
      temp = toFahrenheit(temp);
      document.getElementById("tempLabel").innerHTML = temp + "°F";
  }
  else{
      document.getElementById("tempLabel").innerHTML = "Select a unit";
  }
}

function toCelsius(temp){
  return (temp - 32) * (5/9);
}

function toFahrenheit(temp){
  return temp * 9 / 5 + 32;
}


// array = think of it as a variable 
//              that can store multiple values

let fruits = ["apple", "orange", "banana"];

fruits[2] = "coconut";

fruits.push("lemon");      //add an element
fruits.pop();                     //removes last element
fruits.unshift("mango"); //add element to beginning
fruits.shift();                   //removes element from beginning

let length = fruits.length;
let index = fruits.indexOf("kiwi");

console.log(fruits);


let prices = [5, 10, 15, 20, 25];

/*
for(let i = 0; i < prices.length; i+=1){
    console.log(prices[i]);
}
*/

for(let price of prices){
    console.log(price);
}


let fruits1 = ["banana", "apple", "orange", "mango"];

fruits1 = fruits1.sort();
//fruits1 = fruits1.sort().reverse();

for(let fruit of fruits1){
    console.log(fruit);
}

