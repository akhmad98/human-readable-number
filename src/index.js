module.exports = function toReadable (number) {
    // array includes 0 to 19 (which in indexes are relevant are same as positions) and could be used to updated as new and next to the array
    let numArr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"]
    // array includes 20 to 90 (which indexes are placed that start from [2] indice of array) 
    let decArr = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]
    // counter starts from 21 because numArr array includes till 20 and any number above it can be found and answered
    let counter = 21
    while(counter<1000){
        // First it should check whether the number is equals and over 100 or not because they are inside first array
        // Then, we take only first and whole numbers inside second array
        // And we can just add new number to first array because we console numbers from it

        if (counter < 100) numArr.push(decArr[Math.floor(counter / 10)] + (counter % 10 == 0 ? '' : ' ' + numArr[counter % 10]));
        else numArr.push(numArr[Math.floor(counter/100)] + ' hundred' + (counter%100 == 0 ? '' : ' ' + numArr[counter%100]))
        
        counter += 1;
    }
    return numArr[number]
}
