function max(arrayOfNumbers){
    return Math.max(...arrayOfNumbers)
}

[4, 34, 193, 2, 345, 46, 0]

console.log(max([4, 34, 193, 2, 345, 46, 0]));

function whoIsPassing(arrayOfStudents){

    var passingResults = []
    for (let i = 0; i < arrayOfStudents.length; i++){
        var isCurrentStudentPassing = (arrayOfStudents[i].classAverage >= 60);
passingResults.push(
    {
    name: arrayOfStudents[i].name,
        passing: isCurrentStudentPassing
    }
    )
    }
   return passingResults
}


var students = [
    {
        name: "Phill Rundy",
        classAverage: 53
    },
    {
        name: "Samuel Moore",
        classAverage: 71
    },
    {
        name: "Mark Tendly",
        classAverage: 84
    },
    {
        name: "Dough Mosh",
        classAverage: 87
    },
    {
        name: "Bran Thomb",
        classAverage: 93
    },
    {
        name: "Mario Yushi",
        classAverage: 82
    },
    {
        name: "Nathan Skywalker",
        classAverage: 52
    }
]

console.log(whoIsPassing(students));

function dateStringToObject(string){
    var splitString = (string.split("-"))
    return {month: splitString[1], day: splitString[2], year: splitString[0]}
}

console.log(dateStringToObject("2016-2-13"));

console.log(dateStringToObject("2005-11-29"));

function reverseString(string){
    var revString = ""
    for ( let i = string.length -1; i >= 0; i--) {
        revString += string.charAt(i);
    }
    return revString
}

function numberInfo(number){
    var isNumberPositive = (number > 0);
    var isNumberEven = (number % 2 === 0);
    var isNumberZero = (number === 0);

return {
    isPositive: isNumberPositive,
    isEven: isNumberEven,
    isZero: isNumberZero
}

}
console.log(numberInfo(-1));
console.log(numberInfo(6));
console.log(numberInfo(0));

function removedDuplicates(arrayOfStrings){
    return [...new Set(arrayOfStrings)]
}

console.log(removedDuplicates(["bob","squid","samantha","bob"]));
console.log(removedDuplicates(["tilda","tilda"]));

function mostOccuringNumber(numbers) {
    var counts = [];
    for (let i = 0; i < numbers.length; i++) {
        var aNumber = numbers[i].toString();
        if (counts[aNumber] === undefined){
            counts[aNumber] = 1;
    }
else{
        counts[aNumber]++;
    }
    }
    var maxCount = 0;
    var winningNumber = "";
    for (const countsKey in counts){
        console.log(" count element " + countsKey + " has a tally of " + counts[countsKey]);
        var currentCount = counts[countsKey]
        if(currentCount > maxCount) {
            maxCount = currentCount;
            winningNumber = countsKey;
        }
    }
    return winningNumber;
}

console.log(mostOccuringNumber([8,93,28,8,27,-62,32,8,-62]));