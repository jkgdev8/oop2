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
const cir2 = new Circle(2)
const cir3 = new Circle(3)
const cir4 = new Circle(4)

console.log(cir);