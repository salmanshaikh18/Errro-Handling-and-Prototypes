/*

1. Type Conversion.

Write a function called convertToNumber that takes a string as an argument and returns the equivalent
number. If the string cannot be converted to a number, the function should return the string "Invalid number".
Use error handling in javascript to achieve this output.

*/


function convertToNumber(str) {

    try {
        let num = Number(str)
        if (isNaN(num)) {
            throw new Error("Invalid number")
        }
        else {
            console.log(num)
        }
    } catch (error) {
        console.log(error.message)
        
    }
}

convertToNumber("123")
convertToNumber("abc")


