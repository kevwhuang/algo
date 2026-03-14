// 832 - Flipping an Image

function flipAndInvertImage(image) {
    for (let i = 0; i < image.length; i++) {
        image[i] = image[i].reverse().map(cell => cell ? 0 : 1);
    }
    return image;
}
