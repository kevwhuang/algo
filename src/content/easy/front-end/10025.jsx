// 10025 - Tabs

import React from 'react';

export function Tabs({ tabsList }) {
    const [text, setText] = React.useState(tabsList[0]?.content ?? '');
    return (
        <div>
            {tabsList.map(e =>
                <button onClick={() => setText(e.content)}>{e.label}</button>
            )}
            <p>{text}</p>
        </div>
    );
}
