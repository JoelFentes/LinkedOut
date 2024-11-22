// src/app/jobposting/page.tsx

'use client';

import React, { useState } from 'react';
import './jobposting.css'; // Importando o CSS

const JobPosting = () => {
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    const [distanciaMaxima, setDistanciaMaxima] = useState(0);
    const [idEmpregador] = useState(1); // Este valor deve ser dinâmico baseado no usuário logado

    const handleSubmit = async (e) => {
        e.preventDefault();

        const vagaData = {
            titulo,
            descricao,
            latitude,
            longitude,
            distancia_maxima: distanciaMaxima,
            id_empregador: idEmpregador,
        };

        try {
            const response = await fetch('/api/vagas', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(vagaData),
            });

            if (!response.ok) {
                throw new Error(`Erro ao criar vaga. Status ${response.status}`);
            }

            const data = await response.json();
            console.log('Vaga criada com sucesso:', data);
            // Aqui você pode redirecionar ou mostrar uma mensagem de sucesso
        } catch (error) {
            console.error('Erro ao criar vaga:', error);
        }
    };

    return (
        <div className="job-posting-page">
            <div className="container">
                <h2>Criar Nova Vaga</h2>
                <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label>Título da Vaga</label>
                    <input 
                        type="text" 
                        value={titulo} 
                        onChange={(e) => setTitulo(e.target.value)} 
                        required 
                    />
                </div>
                <div className="input-group">
                    <label>Descrição da Vaga</label>
                    <textarea 
                        value={descricao} 
                        onChange={(e) => setDescricao(e.target.value)} 
                        required 
                    />
                </div>
                <p>LOCALIZAÇÃO DA VAGA</p>
                <div className="input-group">
                    <label>Latitude</label>
                    <input 
                        type="number" 
                        value={latitude} 
                        onChange={(e) => setLatitude(Number(e.target.value))} 
                        required 
                    />
                </div>
                <div className="input-group">
                    <label>Longitude</label>
                    <input 
                        type="number" 
                        value={longitude} 
                        onChange={(e) => setLongitude(Number(e.target.value))} 
                        required 
                    />
                </div>
                <div className="input-group">
                    <label>Distância Máxima (em KM)</label>
                    <input 
                        type="number" 
                        value={distanciaMaxima} 
                        onChange={(e) => setDistanciaMaxima(Number(e.target.value))} 
                        required 
                    />
                </div>
                <button type="submit" className="submit-btn">Criar Vaga</button>
                </form>
            </div>
        </div>
    );
};

export default JobPosting;

