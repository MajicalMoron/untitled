function platform () {
    if (counter == 0) {
        images.createBigImage(`
            . . . . . . . . . .
            . . . . . . . . . .
            . . . . . . . . . .
            # # # # # # # # # #
            # # # # # # # # # #
            `).showImage(0)
    }
}
input.onButtonPressed(Button.A, function () {
    counter = counter + 1
})
let counter = 0
counter = 0
platform()
