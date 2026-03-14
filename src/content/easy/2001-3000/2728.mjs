// 2728 - Count Houses in a Circular Street

function houseCount(street, k) {
    for (let i = 1; i <= k; i++) {
        street.openDoor();
        street.moveLeft();
    }
    let count = 0;
    while (street.isDoorOpen()) {
        street.closeDoor();
        street.moveRight();
        count++;
    }
    return count;
}
