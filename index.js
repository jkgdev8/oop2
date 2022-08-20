// Object Literals
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function () {
        console.log('draw');
    }
};

circle.draw();

function Circle(hello) {
    this.hello = hello
    this.ping = function () {
        console.log('this is a ping');
    }
}

const cir = new Circle(2)
console.log(cir.ping());



const cir2 = new Circle(1)
console.log(cir2)

console.log('hello world');