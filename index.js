// Object Litterals
function Circle(radius) {
    return {
        radius,
        draw() {
            console.log('still draw')

        }
    }
}

const cir = new Circle(1)
const cir2 = new Circle(2);
console.log(cir);