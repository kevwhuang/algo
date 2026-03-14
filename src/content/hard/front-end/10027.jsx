// 10027 - Tic Tac Toe

import React from 'react';

export function TicTacToe() {
    function handleClick(e) {
        const id = e.target.id.slice(5);
        if (status.startsWith('W') || board[id]) return;
        const arr = [...board];
        arr[id] = marker;
        setBoard(arr);
        if (marker === 'X') {
            setMarker('O');
            setStatus('Next Player: O');
        } else {
            setMarker('X');
            setStatus('Next Player: X');
        }
        if (!arr.includes(null)) {
            setStatus('Draw');
        } else {
            for (const [a, b, c] of lines) {
                if (arr[a] && arr[a] === arr[b] && arr[b] === arr[c]) {
                    return setStatus(`Winner: ${arr[a]}`);
                }
            }
        }
    }
    function handleRestart() {
        setBoard(new Array(9).fill(null));
        setMarker('X');
        setStatus('Next Player: X');
    }
    const lines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6],
    ];
    const style = {
        alignItems: 'center',
        border: '1px solid #666',
        display: 'flex',
        fontSize: '25px',
        height: '50px',
        justifyContent: 'center',
        margin: '5px',
        width: '50px',
    };
    const [board, setBoard] = React.useState(new Array(9).fill(null));
    const [marker, setMarker] = React.useState('X');
    const [status, setStatus] = React.useState('Next Player: X');
    return (
        <div>
            <p>{status}</p>
            {lines.slice(0, 3).map(e =>
                <div style={{ display: 'flex' }}>
                    {e.map(id =>
                        <div
                            id={`cell_${id}`}
                            style={style}
                            onClick={handleClick}
                        >
                            {board[id]}
                        </div>
                    )}
                </div>
            )}
            <button onClick={handleRestart}>Restart</button>
        </div>
    );
}
