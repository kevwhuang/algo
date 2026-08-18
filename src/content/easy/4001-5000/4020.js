// 4020. Elevator Requests I

function elevatorRequests(n, requests) {
    let res = requests[0];
    for (let i = 1; i < requests.length; i++) {
        res += Math.abs(requests[i] - requests[i - 1]);
    }
    return res;
}
