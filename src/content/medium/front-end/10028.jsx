// 10028 - Sortable HTML Table

import React from 'react';

export function SortableTable({ data }) {
    function handleClick(e) {
        const copy = structuredClone(table);
        const th = e.target, key = th.textContent, s = 'data-dir';
        const d = th.getAttribute(s) === 'asc' ? -1 : 1;
        th.setAttribute(s, th.getAttribute(s) === 'asc' ? 'desc' : 'asc');
        copy.sort((a, b) => a[key] === b[key] ? 0 : a[key] < b[key] ? d : -d);
        setTable(copy);
    }
    const keys = Object.keys(data[0]), arr = [];
    for (const e of data) {
        for (const key of keys) {
            if (!e[key]) continue;
            arr.push(e);
            break;
        }
    }
    const [table, setTable] = React.useState(arr);
    return (
        <table>
            <thead>
                <tr>
                    {keys.map(key =>
                        <th data-dir="asc" onClick={handleClick}>{key}</th>
                    )}
                </tr>
            </thead>
            <tbody>
                {table.map(e => <tr>{keys.map(key => <td>{e[key]}</td>)}</tr>)}
            </tbody>
        </table>
    );
}
