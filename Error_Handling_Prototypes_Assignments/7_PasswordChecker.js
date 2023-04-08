/* 7. Password Checker.
Create a class called User with properties username and password. Implement a getter method for password
that returns the password with all characters replaced by asterisks. Implement a setter method for password
that checks if the new password is at least 8 characters long and contains at least one number and one
uppercase letter. If the password is valid, set the new password. If not, log an error message. */

class User {
    constructor(username, password) {
        this.username = username
        this._password = password
    }

    get password() {
        return "*".repeat(this._password.length)
    }

    set password(newPassword) {
        const regex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
        if (regex.test(newPassword)) {
            this._password = newPassword
        }
        else {
            console.error("Password must be at least 8 characters long and contain at least one number and one uppercase letter.")
        }
    }
}

const user1 = new User("salman", "password")

console.log(user1.password)

user1.password = "invalidpassword"








/* The User class has two properties: username and _password. The _password property is marked as private by convention (using an underscore), and will be accessed using getter and setter methods.

The get password() method returns the password with all characters replaced by asterisks.

The set password(newPassword) method checks if the new password is at least 8 characters long and contains at least one number and one uppercase letter. If the password is valid, it sets the _password property to the new password. If not, it logs an error message to the console.

To create a new instance of the User class, we pass a username and a password as arguments to the constructor. We can then access the user's password using the password getter method, which returns a masked version of the password.

To set a new password for the user, we use the password setter method and pass the new password as an argument. If the password is valid, it will be set as the new password for the user. If it's not valid, an error message will be logged to the console. */