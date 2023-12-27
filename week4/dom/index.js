const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");

async function populateDiv() {

    const res = await fetch(`https://sum-server.100xdevs.com/sum?a=${parseInt(num1.value)}&b=${parseInt(num2.value)}`);
    const result = await res.json();

    document.getElementById("finalSum").textContent = "Calculate Sum " + result;
}

document.getElementById("btn").addEventListener("click", populateDiv);