const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";
const dropdown = document.querySelectorAll(".dropdown select");
const form = document.getElementById("converter-form");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");
const swapBtn = document.getElementById("swap-btn");

for(let select of dropdown)
{
    for(currCode in countryList)
    {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if(select.name === "from" && currCode === "USD")
        {
            newOption.selected = "selected";
        }
        else if(select.name === "to" && currCode === "INR")
        {
            newOption.selected = "selected";
        }
        select.append(newOption);
    }
    select.addEventListener("change",(evt) =>{
        updateFlag(evt.target);
        updateExchangeRate();
    });
}
 

const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc =`https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src= newSrc;
};

const updateExchangeRate = async () => {
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    if(amtVal === "" || amtVal < 0)
    {
        amtVal="1";
        amount.value = "1";
    }
    
    msg.innerText = "Fetching exchange rate...";
    msg.style.color = "var(--text)";
    
    try {
        const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.min.json`;
        let response = await fetch(URL);
        let data = await response.json();
        let rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
        let finAmt = (amtVal * rate).toFixed(2);
        msg.innerText = `${amtVal} ${fromCurr.value} = ${finAmt} ${toCurr.value}`;
        msg.style.color = "#e2e8f0"; // reset to default
    } catch (error) {
        msg.innerText = "Error fetching rate. Try again later.";
        msg.style.color = "#ef4444"; // red for error
    }
};

swapBtn.addEventListener("click", () => {
    let tempCode = fromCurr.value;
    fromCurr.value = toCurr.value;
    toCurr.value = tempCode;
    updateFlag(fromCurr);
    updateFlag(toCurr);
    updateExchangeRate();
});

window.addEventListener("load", () => {
    updateExchangeRate();
});

form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    updateExchangeRate();
});
