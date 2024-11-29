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

export async function GET() {
    try {
        const result = await Vaga.findAll(); // Ou `findByPk` se estiver filtrando por ID
        return NextResponse.json(result, { status: 200 }); // Retorna JSON válido
    } catch (error) {
        console.error('Erro ao buscar vagas:', error);
        return NextResponse.json({ error: 'Erro ao buscar vagas' }, { status: 500 });
    }
}