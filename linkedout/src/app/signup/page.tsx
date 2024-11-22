'use client';

import React, { useState } from 'react';
import './signup.css';
import Input from '@/components/Input/Input';
import Image from 'next/image';


const SignUp = () => {
    const [isCompany, setIsCompany] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [industry, setIndustry] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const userData = {
            name,
            email,
            password,
            ...(isCompany && { cnpj, industry }),
        };

        try {
            const response = await fetch('/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (!response.ok) {
                throw new Error('Erro ao cadastrar usuário');
            }

            const data = await response.json();
            alert('Usuário cadastrado com sucesso:');
        } catch (error) {
            alert(error);
        }
    };

    return (
        <div className="signup-page">
            <div className="container">
                <h2>Welcome to LinkedOut!</h2>
                <p>Create your account</p>
                <form onSubmit={handleSubmit}>
                    <div className="terms">
                        <input 
                            type="checkbox" 
                            checked={isCompany} 
                            onChange={() => setIsCompany(!isCompany)} 
                        />
                        <label>Register as a company</label>
                    </div>
                    <div className="input-group">
                        <input 
                            type="text" 
                            placeholder={isCompany ? "Enter your company name" : "Enter your name"} 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            required 
                        />
                    </div>
                    {isCompany && (
                        <>
                            <div className="input-group">
                                <input 
                                    type="text" 
                                    placeholder="Enter your CNPJ" 
                                    value={cnpj} 
                                    onChange={(e) => setCnpj(e.target.value)} 
                                    required 
                                />
                            </div>
                            <div className="input-group">
                                <Input 
                                    className="industry-input" 
                                    selectClassName="industry-select" 
                                    placeholder="Select your industry" 
                                    options={[
                                        { value: 'technology', label: 'Technology' },
                                        { value: 'finance', label: 'Finance' },
                                        { value: 'healthcare', label: 'Healthcare' },
                                        { value: 'education', label: 'Education' },
                                        { value: 'manufacturing', label: 'Manufacturing' },
                                        { value: 'other', label: 'Other' }
                                    ]}
                                    value={industry}
                                    onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setIndustry(e.target.value)}
                                    required
                                />
                            </div>
                        </>
                    )}
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
                        <label>I agree to all Terms, Privacy Policy and Fees</label>
                    </div>
                    <button type="submit" className="signup-btn">Sign Up</button>
                </form>
                <p className="login-link">
                    Already have an account? <a href="/login">Log in</a>
                </p>
            </div>
        </div>
    );
};

export default SignUp;