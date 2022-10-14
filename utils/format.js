const formatTitle = function (input) {
    const inputArray = input.split(" ");
    for(let i = 0; i < inputArray.length; i++) {
        inputArray[i] = inputArray[i].charAt(0).toUpperCase() + inputArray[i].slice(1).toLowerCase();        
    }
    return inputArray.join(" ")
}

module.exports = formatTitle;