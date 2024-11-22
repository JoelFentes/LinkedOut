// pages/api/vagas.js
import { NextResponse } from 'next/server';
import { Vaga } from '../../../../models/vaga'; // Ajuste o caminho conforme necessário

export async function POST(request: Request) {
    const vagaData = await request.json();

    try {
        const novaVaga = await Vaga.create(vagaData);
        return NextResponse.json(novaVaga, { status: 201 });
    } catch (error) {
        console.error('Erro ao criar vaga:', error);
        return NextResponse.json({ error: 'Erro ao criar vaga' }, { status: 500 });
    }
}