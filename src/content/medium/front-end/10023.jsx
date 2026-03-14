// 10023. Sign-Up Form Validation

import React from 'react';

export function SignUpFormValidation() {
    function handleClick(e) {
        e.preventDefault();
        let flag1 = true, flag2 = true;
        if (username.length === 0) {
            flag1 = false;
            setErrorUsername('Username is required');
        } else if (username.match(/[^A-Za-z0-9]/)) {
            flag1 = false;
            const s = 'Username must contain only alphanumeric characters';
            setErrorUsername(s);
        } else {
            setErrorUsername('');
        }
        const s = password;
        const match = s.match(/[A-Z]/) && s.match(/[a-z]/) && s.match(/\d/);
        if (password.length === 0) {
            flag2 = false;
            setErrorPassword('Password is required');
        } else if (password.length < 8 || !match) {
            flag2 = false;
            const s = 'Password must contain at least 8 characters, ';
            const t = 'with uppercase, lowercase, and digit(s)';
            setErrorPassword(s + t);
        } else {
            setErrorPassword('');
        }
        setSuccess(flag1 && flag2 ? 'Sign Up Successful' : '');
    }
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [errorUsername, setErrorUsername] = React.useState('');
    const [errorPassword, setErrorPassword] = React.useState('');
    const [success, setSuccess] = React.useState('');
    return (
        <form>
            <input
                name="username"
                placeholder="Enter your username"
                onChange={e => setUsername(e.target.value)}
            />
            <p>{errorUsername}</p>
            <input
                name="password"
                placeholder="Enter your password"
                onChange={e => setPassword(e.target.value)}
            />
            <p>{errorPassword}</p>
            <button onClick={handleClick}>Sign Up</button>
            <p>{success}</p>
        </form>
    );
}
