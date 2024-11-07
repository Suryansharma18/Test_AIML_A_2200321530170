
function login() {
    const userid = document.getElementById("userid").value;
    const password = document.getElementById("password").value;

    if (userid === "admin" && password === "admin") {
        
        window.location.href = "Currency_converter.html";
    } else {
        alert("Error: Incorrect User ID or Password.");
    }
}

function resetForm() {
    document.getElementById("userid").value = "";
    document.getElementById("password").value = "";
}


async function convertCurrency() {
    const amount = document.getElementById("amount").value;
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;

    if (!amount) {
        alert("Please enter an amount.");
        return;
    }

    try {
       
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
        const data = await response.json();

        const rate = data.rates[toCurrency];
        const convertedAmount = (amount * rate).toFixed(2);

        document.getElementById("convertedAmount").value = convertedAmount;
    } catch (error) {
        console.error("Error fetching exchange rate:", error);
        alert("Could not retrieve exchange rate. Please try again.");
    }
}
