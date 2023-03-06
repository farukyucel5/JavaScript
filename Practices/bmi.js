debugger;
let weight =Number(prompt("pass in your weight"));

let height =Number(prompt("pass in your height"));


function kontrolet(w,h){



let result =w/h**2;



if(result<18.5){
    alert("You are underweighted "+ result)

}else if(result>18.5 && result<24.5){

    alert("you are fit " + result)

}
else{
    alert("you are overweighted "+ result)
}

}

kontrolet(weight,height);