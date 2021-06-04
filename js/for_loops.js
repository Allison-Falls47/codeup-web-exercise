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