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
console.log(cir);