// Question 77: Default Parameters: Write a function that greets a user. It should take the user's name as a parameter and say hello. If no name is given, it should greet an anonymous user.
// Explain & TIP: Default parameters allow your functions to have preset values for their parameters. These values are used if no other value is provided, making functions more flexible.
var greeting = function (name) {
    return ("Hey ".concat(name, " Ramadan Mubarak to you and your family"));
};
console.log(greeting("aisha"));
