// 10026 - Mortgage Calculator

export function MortgageCalculator() {
    function handleClick() {
        let a = document.querySelector('#input-1').value;
        let b = document.querySelector('#input-2').value;
        let c = document.querySelector('#input-3').value;
        const flag1 = !a || a !== Number(a).toString();
        const flag2 = !b || b !== Number(b).toString();
        const flag3 = !c || c !== Number(c).toString();
        const p = document.querySelector('#error');
        if (flag1 || flag2 || flag3) return p.textContent = 'Invalid values';
        a = Number(a), b = Number(b), c = Number(c);
        const s = 'Values must be positive';
        if (a <= 0 || b <= 0 || c <= 0) return p.textContent = s;
        const aa = b / 1200, bb = c * 12;
        let aaa = a * aa * (aa + 1) ** bb / ((aa + 1) ** bb - 1);
        let bbb = aaa * bb, cc = bbb - a;
        aaa = aaa.toFixed(2), bbb = bbb.toFixed(2), cc = cc.toFixed(2);
        document.querySelector('#output-1').textContent = aaa;
        document.querySelector('#output-2').textContent = bbb;
        document.querySelector('#output-3').textContent = cc;
        p.textContent = '';
    }
    function handleClear() {
        document.querySelector('#input-1').value = '';
        document.querySelector('#input-2').value = '';
        document.querySelector('#input-3').value = '';
        document.querySelector('#output-1').textContent = '';
        document.querySelector('#output-2').textContent = '';
        document.querySelector('#output-3').textContent = '';
        document.querySelector('#error').textContent = '';
    }
    return (
        <div>
            <input id="input-1" placeholder="Loan amount" />
            <input id="input-2" placeholder="Interest rate" />
            <input id="input-3" placeholder="Loan term" />
            <button onClick={handleClick}>Calculate</button>
            <button onClick={handleClear}>Clear</button>
            <p>Monthly payment: $<span id="output-1" /></p>
            <p>Total payment: $<span id="output-2" /></p>
            <p>Total interest: $<span id="output-3" /></p>
            <p id="error" />
        </div>
    );
}
