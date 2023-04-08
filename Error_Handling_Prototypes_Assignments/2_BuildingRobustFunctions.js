/*

2. Building Robust Functions in JavaScript
Create a function called getPerson that takes an object as a parameter representing a person's name and age.
The function should return the person's name and age as a string in the format "Name: <name>, Age: <age>".
However, if the parameter is not a valid object with the properties "name" and "age", the function should throw
an error with the message "Invalid parameter type". Use try-catch to handle this error and return the error
message if it occurs.

 */


function getPerson(person) {
    try {
      if (typeof person !== "object" || !person.hasOwnProperty("name") || !person.hasOwnProperty("age")) {
        throw new Error("Invalid parameter type");
      }
      return `Name: ${person.name}, Age: ${person.age}`;
    } catch (error) {
      return error.message;
    }
  }  

console.log(getPerson({name: "salman", age: 20}))
console.log(getPerson(["name", "salman"]))
console.log(getPerson({name: "salman"}))





/* The getPerson function takes an object person as a parameter. The function checks if the parameter is a valid object with the properties "name" and "age". If it is not, an error is thrown with the message "Invalid parameter type".

If the parameter is valid, the function returns a string that includes the person's name and age in the specified format. If an error occurs, the catch block is executed and the error message is returned. */