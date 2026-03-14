// 2621 - Sleep

async function sleep(millis) {
    await new Promise(res => setTimeout(res, millis));
}
