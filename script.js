function Circle(radius) {
    return {
        radius: radius,
        draw() {
            console.log('Still a working method')
        }
    }
}

const circle = new Circle(1)
const circle1 = new Circle(2)

console.log(circle.draw());
console.log(circle1.draw());
