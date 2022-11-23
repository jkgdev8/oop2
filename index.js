function Circle(radius) {
    this.radius = radius,
        this.draw = function () {
            console.log('draw');
        }
}

const c = new Circle(3);
console.log(c.draw());

