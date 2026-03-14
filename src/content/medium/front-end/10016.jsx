// 10016 - Auto Focus Switch

export function AutoFocusSwitch({ elements }) {
    function handleKeyDown(e, max) {
        e.preventDefault();
        const input = e.target;
        if (e.key === 'Backspace') {
            if (input.value) {
                input.value = input.value.slice(0, -1);
            } else {
                if (!input.previousSibling) return;
                const prev = input.previousSibling.value;
                input.previousSibling.value = prev.slice(0, -1);
                input.previousSibling.focus();
            }
        } else if (e.key.match(/\d/)) {
            if (input.value.length < max) input.value += e.key;
            if (input.value.length === max) input.nextSibling?.focus();
        }
    }
    return (
        <div>
            {elements.map(({ id, maxLength, type }) =>
                <input
                    id={id}
                    type={type}
                    onKeyDown={e => handleKeyDown(e, Number(maxLength))}
                />
            )}
        </div>
    );
}
