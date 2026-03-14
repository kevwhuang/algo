// 10024 - HTML Form Submission

import React from 'react';

export function FormHandler() {
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const res = await fetch('/contact-us', {
                body: JSON.stringify({ message, name }),
                method: 'POST',
            });
            const data = await res.json();
            setSuccess(data.ok);
        } catch {
            setSuccess(false);
        }
    }
    const [name, setName] = React.useState('');
    const [message, setMessage] = React.useState('');
    const [success, setSuccess] = React.useState(null);
    return (
        <div>
            {success
                ? <p>Thank you</p>
                : <form onSubmit={handleSubmit}>
                    <input
                        name="name"
                        placeholder="Name"
                        onChange={e => setName(e.target.value)}
                    />
                    <input
                        name="message"
                        placeholder="Feedback message"
                        onChange={e => setMessage(e.target.value)}
                    />
                    <button>Send</button>
                    <p>{!success && 'Something went wrong'}</p>
                </form>
            }
        </div>
    );
}
