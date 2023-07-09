function convertToFar() {
    var celsiusInput = document.getElementById("celsius");
    var celsiusValue = parseFloat(celsiusInput.value);

    if (isNaN(celsiusValue)) {
        document.getElementById("result").innerHTML = "Please enter a valid temperature";
        return;
    }

    var fahrenheitValue = (celsiusValue * 9/5) + 32;
    document.getElementById("result").innerHTML = celsiusValue + "°C is " + fahrenheitValue.toFixed(2) + "°F";
}

function convertToCelsius() {
    var fahrenheitInput = document.getElementById("fahrenheit");
    var fahrenheitValue = parseFloat(fahrenheitInput.value);

    if (isNaN(fahrenheitValue)) {
        document.getElementById("result").innerHTML = "Please enter a valid temperature";
        return;
    }

    var celsiusValue = (fahrenheitValue - 32) * 5/9;
    document.getElementById("result").innerHTML = fahrenheitValue + "°F is " + celsiusValue.toFixed(2) + "°C";
}
