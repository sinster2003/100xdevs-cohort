const capitalAmount = document.getElementById("capital");
const years = document.getElementById("year");
const rate = document.getElementById("interest");
const interestAmount = document.getElementById("output");
const calciBtn = document.querySelector(".calci-btn");
const calci = document.querySelector(".calci");
const errorMessage = document.createElement("p");
let isError = false;

calciBtn.addEventListener("click", (event) => {

    if(capitalAmount.value && years.value && rate.value) {
        if(isError) {
            calci.removeChild(errorMessage);
            isError = false;
        }
        const value = (capitalAmount.value * years.value * rate.value) / 100;
        interestAmount.value = value + parseInt(capitalAmount.value);
    } 
    else {
        errorMessage.textContent = "Please enter all the three fields";
        errorMessage.style.setProperty("color", "red");
        if(!isError) {
            calci.appendChild(errorMessage);
        }
        isError = true;
    }
})
