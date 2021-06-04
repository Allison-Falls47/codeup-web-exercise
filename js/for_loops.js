function showMultiplicationTable(x){
    for(let y = 1; y<= 10; y++) {
        console.log(x + " x " + y + " = " + (x*y))
    }
}

console.log(showMultiplicationTable(7))



for (let ev = 1; ev<=10; ev++) {
    random = Math.floor(Math.random()*(200 - 1) +1);
    if (random % 2 !== 0) {
        console.log(random + " is odd");}
        else {
            console.log(random + " is even")
        }

}

function tree(){
    for (let x=1; x<10; x++){

        var number="";
        number=x;
        for (let y = 1; y<x; y++){
            number=number+x.toString();
        }
        console.log(number.toString() );
    }
}
tree();
//for (var index = 1,number = ""; index <10;index){     ^ other way of doing this
//number += "1";
//console.log(index*number)}

for (var w = 100; w >= 10; w-=5){
    console.log(w)
}
console.log(w)
