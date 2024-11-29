'use client';

import React, { useState, useEffect } from 'react';
import './vagas.css';

interface Vaga {
    id: number;
    titulo: string;
    descricao: string;
    distancia_maxima: number;
    latitude: number;
    longitude: number;
}

const Vagas = () => {
    const [vagas, setVagas] = useState<Vaga[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedVaga, setSelectedVaga] = useState<Vaga | null>(null); // Estado para a vaga selecionada
    const [searchQuery, setSearchQuery] = useState(''); // Estado para o texto da busca

    // Função para buscar as vagas
    const fetchVagas = async () => {
        try {
            const response = await fetch('/api/vagas'); // Ajuste a URL conforme necessário
            if (!response.ok) {
                throw new Error('Erro ao buscar vagas');
            }
            const data = await response.json() as Vaga[];
            setVagas(data);
        } catch (err) {
            alert(`Erro: ${err instanceof Error ? err.message : 'Erro desconhecido'}`);
            setError(err instanceof Error ? err.message : 'Erro desconhecido');
        } finally {
            setLoading(false);
        }
    };

    // useEffect para chamar a função de busca quando o componente for montado
    useEffect(() => {
        fetchVagas();
    }, []);

    // useEffect para selecionar a primeira vaga assim que as vagas forem carregadas
    useEffect(() => {
        if (vagas.length > 0 && !selectedVaga) {
            setSelectedVaga(vagas[0]);
        }
    }, [vagas, selectedVaga]);

    // Função para filtrar as vagas com base no texto da busca
    const filteredVagas = vagas.filter(vaga =>
        vaga.titulo.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (loading) return <p>Carregando...</p>;
    if (error) return <p>Erro: {error}</p>;

    return (
        <div className='vagas-page'>
            <label>Procure as vagas que mais combinam com você!</label>
            <input
                className='search-job'
                type="text"
                placeholder="Buscar vagas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} // Atualiza o estado searchQuery
            />
            <div className='divider'></div>
            <div className='container'>
                <div className='job-list'>
                    {filteredVagas.length > 0 ? (
                        filteredVagas.map((vaga) => (
                            <div
                                key={vaga.id}
                                className='jobs'
                                onClick={() => setSelectedVaga(vaga)} // Define a vaga selecionada ao clicar
                                style={{
                                    cursor: 'pointer',
                                    backgroundColor: selectedVaga?.id === vaga.id ? '#f0f0f0' : 'white'
                                }}
                            >
                                <h2>{vaga.titulo}</h2>
                                <h3>Distância Máxima: {vaga.distancia_maxima} km</h3>
                                <p>{vaga.descricao}</p>
                            </div>
                        ))
                    ) : (
                        <p>Nenhuma vaga encontrada para o termo "{searchQuery}".</p>
                    )}
                    <div className="search-results">
                        <p>{filteredVagas.length} resultado(s) encontrado(s)</p>
                    </div>
                </div>

              

                <div className='selected-job'>
                    {selectedVaga ? (
                        <>
                            <h1>{selectedVaga.titulo}</h1>
                            <p>Distância de você: {selectedVaga.distancia_maxima} km</p>
                            <button className='btn-job'>Candidate-se agora</button>
                            <div className='divider-job'></div>
                            <p className='description'>{selectedVaga.descricao}</p>
                        </>
                    ) : (
                        <p>Selecione uma vaga para ver mais detalhes</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Vagas;
