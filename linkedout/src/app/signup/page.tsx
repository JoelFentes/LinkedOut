// src/app/signup/page.tsx

'use client'; // Torna este componente um Client Component

import React, { useState } from 'react';
import './signup.css'

const SignUp = () => {
  const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Lógica para criar conta
        console.log({ name, email, password });
    };

    return (
        <div className="container">
            <h2>Create your account</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <input 
                        type="text" 
                        placeholder="Enter your name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />
                </div>
                <div className="input-group">
                    <input 
                        type="email" 
                        placeholder="Enter your email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>
                <div className="input-group">
                    <input 
                        type="password" 
                        placeholder="Enter your password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                <div className="terms">
                    <input type="checkbox" required />
                    <label>I agree to all Term, Privacy Policy and Fees</label>
                </div>
                <button type="submit" className="signup-btn">Sign Up</button>
            </form>
            <p className="login-link">
                Already have an account? <a href="#">Log in</a>
            </p>
        </div>
    );
};

export default SignUp;
