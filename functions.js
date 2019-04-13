var amount = Number(document.getElementById("amount").value);
var fromCurrency = document.getElementById("fromCurrency").value;
var toCurrency = document.getElementById("toCurrency").value;
var convertResult;
console.log(amount);
console.log(fromCurrency);
console.log(toCurrency);

function convert_currency () {
    if (fromCurrency == "" || toCurrency == "") {
        convertResult = "Please select 'from currency' and 'to currency' before calculating";
    } else if (fromCurrency === "VND") {
        switch (toCurrency) {
            case 1: "USD"
                convertResult = amount / 23;
                break;
            case 2: "VND"
                convertResult = amount;
                break;
        };
    } else if (fromCurrency === "USD") {
        switch (toCurrency) {
            case 1: "VND"
                convertResult = amount * 23;
                break;
            case 2: "USD"
                convertResult = amount;
                break;
        };
    }
    console.log(amount);
    console.log(fromCurrency);
    console.log(toCurrency);
    console.log(convertResult);
    return convertResult;
};

function show_convert_result () {
    document.getElementById("convertResult").innerHTML = "Result: " + convert_currency();
};