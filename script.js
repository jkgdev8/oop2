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
const circle2 = new Circle(3)


console.log(circle.draw());
console.log(circle1.draw());
console.log(circle2.draw());

