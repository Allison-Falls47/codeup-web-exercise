// TODO: Create a function named countSpaces that accepts a string and returns the total number of spaces in the string.

function countSpaces(input){
 if (typeof input === "string")
     return (input.split(" ").length - 1)
 else{
     return false
 }
}


// TODO: Add validation to function above, if the argument pass is not a string it should return false.

// July 6th 2021
// TODO: Create a function named capitalizeAllNames that accepts an array of strings and returns the array with all of its elements capitalized.
// Example:  capitalizeAllNames(["bob","Seth","TOFU","Toyota"]) ---- returns ----> ["BOB","SETH","TOFU","TOYOTA"]

function capitalizeAllNames(input){
    if (typeof input === "string")
        return input.toUpperCase()
}
console.log(capitalizeAllNames("joe"))
// TODO: Create a function named capitalizeFirstLetter that accepts an array of strings and returns the array with all of the first letters in
//  each string being capitalized while having the rest of the string lowercase look at the example below for reference.
// Example:  capitalizeFirstLetter(["bob","Seth","TOFU","Toyota"]) ---- returns ----> ["Bob","Seth","Tofu","Toyota"]
var arraySample = []
function capitalizeFirstLetter(input){
    if (typeof input === "string")
        return input.charAt(0).toUpperCase() + input.slice(1);
}
console.log(capitalizeFirstLetter(["joe", "jim", "jane"]))



// July 7th 2021
// TODO: Create a method on the object down below named getFullName that when called returns the users full name using the "this" key term.
// Example: personOne.getFullName() ---- returns ----> "silvia floopertan"
var personOne = {
    firstName: "silvia",
    lastName: "floopertan",
    ageInYears: 34,
    heightInInches: 65
}

personOne.getFullName = function(){
    console.log(personOne.firstName + " " + personOne.lastName)
};
personOne.getFullName();



// TODO: Create a method on the object down below named getNicelyFormattedFullName that when called returns the
//  users full name with both first letters in the names being capitalized look at example down below for more reference.
// Example: personOne.getNicelyFormattedFullName() ---- returns ----> "Dan Valdarez"
var personTwo = {
    firstName: "dan",
    lastName: "valdarez",
    ageInYears: 61,
    heightInInches: 73
}

personTwo.getNicelyFormattedFullName = function(){
    console.log(personTwo.firstName.charAt(0).toUpperCase() + personTwo.firstName.slice(1) + " " + personTwo.lastName.charAt(0).toUpperCase()+ personTwo.lastName.slice(1))
};
personTwo.getNicelyFormattedFullName ();


// TODO: Create a method on the object below that gives us the behavior that the example implies.
// Example: personThree.intro() ---- returns ----> "Hello, My name is Arlene Martinez and I am 25 years old"
var personThree = {
    firstName: "arlene",
    lastName: "martinez",
    ageInYears: 25,
    heightInInches: 62
}

personThree.intro = function(){
    console.log("Hello, My name is "  + personThree.firstName + " " + personThree.lastName + " and I am 25 years old")
};
personThree.intro();