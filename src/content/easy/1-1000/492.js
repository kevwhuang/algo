// 492 - Construct the Rectangle

function constructRectangle(area) {
    let width = Math.floor(Math.sqrt(area));
    while (area % width) width--;
    return [area / width, width];
}
