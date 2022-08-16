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

function Circle(radius) {
    this.radius = radius,
        this.draw = function () {
            console.log('draws');
        }


}

const cir = new Circle(2);
console.log(cir);

