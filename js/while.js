"use strict";
var b = 2;
do{
    console.log(b);
    b*= 2;
}
while (b < 65537);

//space

let totalCanSell =Math.ceil(Math.random() * (100-50) + 50);
console.log("The number of cones I can sell" + totalCanSell);

//total sold today
let totalSold = 0;

do {
    let conesBought = Math.ceil(Math.random() * (5 - 1) + 1);

    if ((totalSold + conesBought) > totalCanSell){
        console.log("I'm sorry, I can't sell " + conesBought);
        continue;
    }
    console.log("my customer bought" + conesBought);
    totalSold = totalCanSell + conesBought;
    console.log("I've sold this many" + totalSold);

} while (totalSold < totalCanSell);
