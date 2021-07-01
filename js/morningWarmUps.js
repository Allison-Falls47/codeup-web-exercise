// TODO: Create a function named countSpaces that accepts a string and returns the total number of spaces in the string.

function countSpaces(input){
 if (typeof input === "string")
     return (input.split(" ").length - 1)
 else{
     return false
 }
}


// TODO: Add validation to function above, if the argument pass is not a string it should return false.


