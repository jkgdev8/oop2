// Object Litterals
function Circle(radius) {
    return {
        radius,
        draw() {
            console.log('still draw')

        }
    }
}

const circ = new Circle(2);
console.log(circ.draw());

