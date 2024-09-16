function transformString() {
    var userInput = prompt("Enter a string:");
    if (userInput) {
        var transformedString = "";
        for (var i = 0; i < userInput.length; i++) {
            transformedString += i + userInput[i].toUpperCase();
        }
        document.getElementById("output").innerText = transformedString;
    }
}
