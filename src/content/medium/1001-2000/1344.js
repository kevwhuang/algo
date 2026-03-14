// 1344 - Angle Between Hands of a Clock

function angleClock(hour, minutes) {
    if (hour === 12) hour = 0;
    const minutesAngle = 6 * minutes;
    const hourAngle = 30 * (hour + minutesAngle / 360);
    const angle = Math.abs(hourAngle - minutesAngle);
    return Math.min(angle, 360 - angle);
}
