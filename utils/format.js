//format user input movie title to match cases from csv/in database
//first letter of each word capitalized
const formatTitle = function (input) {
    const inputArray = input.split(" ");
    for(let i = 0; i < inputArray.length; i++) {
        inputArray[i] = inputArray[i].charAt(0).toUpperCase() + inputArray[i].slice(1).toLowerCase();        
    }
    return inputArray.join(" ")
}

module.exports = formatTitle;