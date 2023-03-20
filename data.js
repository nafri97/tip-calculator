

let amount = document.getElementById("amount")
let total = document.getElementById("total")
let totalPeopleOutput = document.getElementById("ofPeople")
let error1 = document.getElementById("error1")
let error2= document.getElementById("error2")
let billInput= document.getElementById("bill")
let people = document.getElementById("people")
let lastClickedButton = null;
let buttonSet1 = document.getElementById("buttonSet1")
let buttonSet2 = document.getElementById("buttonSet2")
let buttonSet3 = document.getElementById("buttonSet3")
let buttonSet4 = document.getElementById("buttonSet4")
let buttonSet5 = document.getElementById("buttonSet5")

function setTipRate(button, rate) {
  // reset the background color of the previous button
    if (lastClickedButton != null) {
    lastClickedButton.style.backgroundColor = "hsl(183, 100%, 15%)";
    }
  // set the background color of the clicked button
  button.style.backgroundColor = " hsl(172, 67%, 45%)";
  lastClickedButton = button;
  let bill = parseFloat(document.getElementById("bill").value);
  let people = document.getElementById("people")
  if (isNaN(bill)){
    error1.style.display= "inline-block";      
    }
  if(people.value==0){
    error2.style.display= "inline-block";
    }
  else{
    error2.style.display= "none";
    error1.style.display= "none";
    totalValue= bill*rate/100;
    amountValue= totalValue/people.value;
    total.textContent = totalValue.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
    amount.textContent = amountValue.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
    totalPeopleOutput.textContent = `of ${people.value} people`;
    }
}
function calculateTip() {
    let bill = parseFloat(document.getElementById("bill").value);
    let people = document.getElementById("people");
    let custom = document.getElementById("custom");
    custom.style.backgroundColor =  "hsl(189, 41%, 97%)";
    custom.style.color =  "hsl(183, 100%, 15%)";
    custom.style.outlineColor =  "hsl(172, 67%, 45%)";
    buttonSet1.style.backgroundColor = "hsl(183, 100%, 15%)";
    buttonSet2.style.backgroundColor = "hsl(183, 100%, 15%)";
    buttonSet3.style.backgroundColor = "hsl(183, 100%, 15%)";
    buttonSet4.style.backgroundColor = "hsl(183, 100%, 15%)";
    buttonSet5.style.backgroundColor = "hsl(183, 100%, 15%)";
    if(isNaN(bill)){
        error1.style.display= "inline-block";        
    }
    if(people.value==0){
        error2.style.display= "inline-block";
    }
    else{
        error2.style.display= "none";
        error1.style.display= "none";
        totalValue= bill*custom.value/100;
        amountValue= totalValue/people.value;
        total.textContent = totalValue.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
        amount.textContent = amountValue.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
        totalPeopleOutput.textContent = `of ${people.value} people`;
    }
}

function resetPage(){
  buttonSet1.style.backgroundColor = "hsl(183, 100%, 15%)";
  buttonSet2.style.backgroundColor = "hsl(183, 100%, 15%)";
  buttonSet3.style.backgroundColor = "hsl(183, 100%, 15%)";
  buttonSet4.style.backgroundColor = "hsl(183, 100%, 15%)";
  buttonSet5.style.backgroundColor = "hsl(183, 100%, 15%)";
  billInput.value = 0;
  custom.value = 0;
  people.value = 1;
  amount.textContent = '$0';
  total.textContent = '$0';
  totalPeopleOutput.textContent = 'of 1 person';
}
