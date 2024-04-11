import React, { useState } from 'react';

const Signup: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');


    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };
    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/user/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password , username}),
            });

            if (response.ok) {
                // Signup was successful, redirect to the login page
                console.log('Signup successful');
             } else {
                // Signup failed, handle the error here
            }
        } catch (error) {
            // Handle any network or server errors here
        }
    };

    return (
        <div>
            <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={handleEmailChange} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={handlePasswordChange} />
                </div>
                <div>
                    <label>Username:</label>
                    <input type="text" value={username} onChange={handleUsernameChange} />
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default Signup;