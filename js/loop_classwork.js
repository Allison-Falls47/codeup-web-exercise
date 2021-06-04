
/*var message = "";

//var howmany = prompt("how many?");

for (let index = 0; index <= 10; index++) {
    message = message + "index is: " + index + "\n";
}

alert(message);

alert(index); */

/*var notDone = true;

while(notDone){
    notDone = confirm("Do you want to go again")

}*/

notDone = true;

do{
    alert("Doing stuff");
    notDone=confirm("Again?");
} while(notDone);

var badData = false;

function validateNumber(){
    var value = prompt("Enter a number");
    badData = typeof value != "number"
    while(!badData);
    return value;
}

