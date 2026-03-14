// 10014 - Phone Number Input

import React from 'react';

export function PhoneNumberInput() {
    function handleChange(e) {
        const s = e.replace(/\D/g, '');
        if (s.length >= 7) {
            setDigits(`(${s.slice(0, 3)}) ${s.slice(3, 6)}-${s.slice(6)}`);
        } else if (s.length >= 4) {
            setDigits(`(${s.slice(0, 3)}) ${s.slice(3, 6)}`);
        } else if (s.length) {
            setDigits(`(${s}`);
        } else {
            setDigits('');
        }
    }
    const [digits, setDigits] = React.useState('');
    return (
        <input
            maxLength={14}
            placeholder="mobile number"
            value={digits}
            onChange={e => handleChange(e.target.value)}
        />
    );
}
