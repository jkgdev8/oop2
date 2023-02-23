function Circle(radius) {
    this.radius = radius,
        this.draw = function () {
            console.log('drawing');
        }
}

const c = new Circle(2)
const x = new Circle(3)
console.log(c.draw());
console.log(x.draw());