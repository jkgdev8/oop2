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
// function createCircle(radius) {
//     return {
//         radius,
//         draw() {
//             console.log('still draw');
//         }
//     }
// }
// const circ = createCircle(1);
// console.log(circ.draw());





// // Constructor Function
// function Circle(radius) {
//     this.radius = radius,
//         this.draw = function () {
//             console.log('still draw');
//         }
// }

// const cir = new Circle(2);
// console.log(cir);
// console.log(cir.draw(0));


function Circle(radius) {
    this.radius = radius,
        this.draw - function () {
            console.log('draw');
        }
}

const c = new Circle(1)
console.log(c);
console.log(c.draw);