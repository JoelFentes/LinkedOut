// src/app/jobposting/page.tsx

'use client';

import React, { useState } from 'react';
import './jobposting.css'; // Importando o CSS
import Image from 'next/image';

const JobPosting = () => {
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [distanciaMaxima, setDistanciaMaxima] = useState('');
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
                <h1>Publique a sua vaga no LinkedOut!</h1>
                <form onSubmit={handleSubmit}>
                <div className="job-title">
                    <label>Título da Vaga</label>
                    <input 
                        type="text" 
                        value={titulo} 
                        onChange={(e) => setTitulo(e.target.value)} 
                        required 
                    />
                </div>
                <div className="job-description">
                    <label>Descrição da Vaga</label>
                    <textarea 
                        value={descricao} 
                        onChange={(e) => setDescricao(e.target.value)} 
                        required 
                    />
                </div>
                <div className='location'> 
                    <p>Não sabe a latitude e longitude da sua localização? <br/>procure na internet
                    </p>
                    <div className="job-latitude">
                        <label>Latitude</label>
                        <input 
                            type="text" 
                            value={latitude} 
                            onChange={(e) => setLatitude(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="job-longitude">
                        <label>Longitude</label>
                        <input 
                            type="text" 
                            value={longitude} 
                            onChange={(e) => setLongitude(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="max-distance">
                        <label>Distância Máxima (em KM)</label>
                        <input 
                            type="text" 
                            value={distanciaMaxima} 
                            onChange={(e) => setDistanciaMaxima(e.target.value)} 
                            required 
                        />
                    </div>
                </div>
                <button type="submit" className="submit-btn">Criar Vaga</button>
                </form>
                <div className='image'>
                    <Image
                        src="/JobImage.svg"
                        alt="Job Image"
                        className="Job-image"
                        fill
                        priority
                />
        </div>
            </div>
        </div>
    );
};

export default JobPosting;

