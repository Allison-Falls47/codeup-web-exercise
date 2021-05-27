"use strict";

// ... code

console.log("Hello World");
console.log("Hello Polaris");
console.log("Hello from external Javascript");
alert("Welcome to my Website")

var userInput = prompt('Whats your favorite color?');
alert("Great, " + userInput + " is my favorite color too!")

//new stuff v

alert("The price for the movie is:" + (3+5+1)*3);

alert("You will receive a total of: " + ((400*6) + (380*4) + (350*10)) + " from all your hours");

var full = confirm("is the class full?");
var conflict = confirm("is there conflict?");
alert("You can enroll in this class!" + (!full && !conflict));

var premium = confirm("are you a premium member?");
var items = Number(prompt("Have you bought two or more items?"));
var valid = confirm("is the coupon valid?")
alert("You can use the offer!" + ((valid) && (premium || (items > 2))))

var username = 'codeup';
var password = 'notastrongpassword';

var password_is_five_characters = password.length >=5;
var password_contains_username = password.includes(username);
var username_less_than_20_characters = username.length <=20;
var contains_no_whitespace = username === password.trim() && username === username;
console.log(password_is_five_characters);
console.log(password_contains_username);
console.log(username_less_than_20_characters);
console.log(contains_no_whitespace);