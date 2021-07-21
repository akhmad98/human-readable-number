module.exports = function toReadable (number) {
    // array includes 0 to 19 (which in indexes are relevant are same as positions)
    let numArr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"]
    // array includes 20 to 90 (which indexes are placed that start from [2] indice of array) 
    let decArr = ["", "", "twenty", "thirty", "fourty", "fifty", "sixty", "seventy", "eighty", "ninety"]
    // counter starts from 21 because numArr array includes till 20 and any number above it can be found and answered
    let counter = 21
    while (counter < 1000) {
        // First it should check whether the number is equals and over 100 or not because
    } 
}
