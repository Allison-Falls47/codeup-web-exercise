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