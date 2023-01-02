document.getElementById("myButton").onclick = function(){

    const myCheckBox = document.getElementById("myCheckBox");
    const visaBtn = document.getElementById("visaBtn");
    const mastercardBtn = document.getElementById("mastercardBtn");
    const paypalBtn = document.getElementById("paypalBtn");
  
    if(myCheckBox.checked){
        document.getElementById("myCheckBox").innerHTML="You are subscribed"
      
    }
    else{
        document.getElementById("myCheckBox").innerHTML="You are not subscribed"
      
    }
  
    if(visaBtn.checked){
        document.getElementById("visaBtn").innerHTML="You are paying with visa"
    }
    else if(mastercardBtn.checked){
        document.getElementById("mastercardBtn").innerHTML="You are paying with master card"
    }
    else if(paypalBtn.checked){
        
        document.getElementById("paypalBtn").innerHTML="You are paying with paypal"
    }
    else{
      console.log("You must select a payment type!");
    }
  }