function Circle(radius) {
    return {
        radius: radius,
        draw() {
            console.log('Still a working method')
        }
    }
}

const circle = new Circle(1)

console.log(circle.draw());