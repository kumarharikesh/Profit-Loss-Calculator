const initialPrice = document.querySelector("#initial-price");
const stocksQuantity = document.querySelector("#stocks-quantity");
const currentPrice = document.querySelector("#current-price");
const outputTag = document.querySelector(".output");
const reset = document.querySelector("#clear");

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
};

async function calculateProfitLoss(initial, quantity, current) {

  outputTag.innerText ="";
  outputTag.style.textAlign = "left";
  outputTag.setAttribute("placeholder", "Loading");
  await sleep(500);
  outputTag.setAttribute("placeholder", "Loading.");
  await sleep(500);
  outputTag.setAttribute("placeholder", "Loading..");
  await sleep(500);
  outputTag.setAttribute("placeholder", "Loading...");
  await sleep(500);
  outputTag.setAttribute("placeholder", "Loading..");
  await sleep(500);
  outputTag.setAttribute("placeholder", "Loading.");
  await sleep(500);
  outputTag.setAttribute("placeholder", "Loading");
  await sleep(500);
  outputTag.setAttribute("placeholder", "Loading.");
  await sleep(500);
  outputTag.setAttribute("placeholder", "Loading..");
  await sleep(500);
  outputTag.setAttribute("placeholder", "Loading...");
  await sleep(500);

  if (initial > current) {

    var loss = (initial - current) * quantity;
    var lossPercentage = (1-((current * quantity) / (initial * quantity))) * 100;
    lossPercentage = lossPercentage.toFixed(2);

    outputTag.innerHTML = `Hey, the loss is ${loss} and the percent is ${lossPercentage}%`;
    outputTag.style.color = "red";

  } else if (current > initial) {

    var profit = (current - initial) * quantity;
    var profitPercentage = (((current * quantity) / (initial * quantity))-1) * 100;
    profitPercentage = profitPercentage.toFixed(2);

    outputTag.innerHTML = `Hey, the profit is ${profit} and the percent is ${profitPercentage}%`;
    outputTag.style.color = "green";
    
  } else {
    outputTag.innerHTML = `No pain no gain and no gain no pain`;
  }
}

function submitHandler() {
  var ip = Number(initialPrice.value);
  var qty = Number(stocksQuantity.value);
  var curr = Number(currentPrice.value);

  calculateProfitLoss(ip, qty, curr);
}

reset.addEventListener("click", function(){
  outputTag.innerText="";
  outputTag.setAttribute("placeholder", "Output will be shown here...");
  outputTag.style.textAlign = "left";
});

document.getElementById("calculate-profit-form").addEventListener("submit", function(event){
  submitHandler();
  event.preventDefault();
});