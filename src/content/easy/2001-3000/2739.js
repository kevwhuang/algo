// 2739 - Total Distance Traveled

function distanceTraveled(mainTank, additionalTank) {
    let km = 0;
    while (true) {
        if (mainTank < 5 && (km += mainTank)) break;
        km += 5, mainTank -= 5;
        if (additionalTank === 0) continue;
        mainTank++, additionalTank--;
    }
    return 10 * km;
}
