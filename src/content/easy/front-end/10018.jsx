// 10018 - Toggle List Selection

import React from 'react';

export function HandleItemSelection({ elements }) {
    function handleClick(e) {
        const copy = [...selected];
        if (copy.includes(e)) copy.splice(copy.indexOf(e), 1);
        else copy.push(e);
        if (copy.length === 4) copy.shift();
        setSelected(copy);
    }
    const [selected, setSelected] = React.useState([]);
    return (
        <ul>
            {elements.map(e =>
                <li
                    className={selected.includes(e) ? 'selected' : ''}
                    onClick={() => handleClick(e)}
                >
                    {e}
                </li>
            )}
        </ul>
    );
}
