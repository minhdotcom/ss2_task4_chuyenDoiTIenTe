var amount;
var fromCurrency;
var toCurrency;
var convertResult;
console.log(amount);
console.log(fromCurrency);
console.log(toCurrency);

function convert_currency () {
    amount = Number(document.getElementById("amount").value);
    fromCurrency = document.getElementById("fromCurrency").value;
    toCurrency = document.getElementById("toCurrency").value;
    if (fromCurrency == "" || toCurrency == "") {
        convertResult = "Please select 'from currency' and 'to currency' before calculating";
    } else if (fromCurrency == "VND") {
        switch (toCurrency) {
            case "USD":
                convertResult = amount / 23;
                break;
            case "VND":
                convertResult = amount;
                break;
        };
    } else if (fromCurrency == "USD") {
        switch (toCurrency) {
            case "VND":
                convertResult = amount * 23;
                break;
            case "USD":
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