///(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 5,

        getArea: function () {
            //
            // hint: area = pi * radius^2
            return  Math.PI * Math.pow(this.radius, 2);

        },

        logInfo: function (doRounding) {

           if (doRounding){
               console.log("Area of a circle with radius: " + Math.round(this.radius) + ", is: " + Math.round(this.getArea()));
           }
           else{
               console.log("Area of a circle with radius: " + Math.round(this.radius) + ", is: " + this.getArea());
           }

            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log(circle.getArea());
//})();
