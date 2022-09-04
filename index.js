// Object Litterals
// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     draw: function () {
//         console.log('draw');
//     }
// };

// circle.draw();




//Factory Function
function createCircle(radius) {
    return {
        radius,
        draw: function () {
            console.log('draw');
        }
    }
}

const circle = createCircle(1);
circle.draw()
console.log("~ circle.draw()", circle.draw());






// Constructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

const cir = new Circle(1);
console.log(cir);
console.log(cir.draw()
);

