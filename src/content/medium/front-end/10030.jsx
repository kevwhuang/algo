// 10030 - Files Tree View

import React from 'react';

export function TreeView({ items }) {
    function Tree({ items }) {
        return (
            <ul style={{ listStyle: 'none' }}>
                {items.map(e => <TreeItem item={e} />)}
            </ul>
        );
    }
    function TreeItem({ item }) {
        function handleClick() {
            if (set.has(item)) set.delete(item) && setCollapsed(true);
            else set.add(item) && setCollapsed(false);
        }
        const [collapsed, setCollapsed] = React.useState(!set.has(item));
        const flag = Boolean(item.children?.length);
        return (
            <li>
                <span onClick={handleClick}>
                    {flag && (collapsed ? '+' : '-')} {item.name}
                </span>
                {flag && !collapsed && <Tree items={item.children} />}
            </li>
        );
    }
    const set = new WeakSet();
    return <Tree items={items} />;
}
