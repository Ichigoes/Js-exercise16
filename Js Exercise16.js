function figuresFaces(input) {
    let figureName = (input[0])
    if (figureName == "square"){
        let a = Number(input[1])
        let face = a * a
        console.log(face.toFixed(3))
    } else if (figureName == "rectangle") {
        let a = Number(input[1])
        let b = Number(input[2])
        let face = a * b
        console.log(face.toFixed(3))
    } else if (figureName == "circle") {
        let radius = Number(input[1])
        let face = Math.PI * Math.pow(radius, 2)
        console.log(face.toFixed(3))
    } else if (figureName == "triangle") {
        a = Number(input[1])
        b = Number(input[2])
        face = (a * b) / 2
        console.log(face.toFixed(3))
    } 
}

figuresFaces(["circle", "6"])

