// src/app/api/signup/route.ts

import { NextResponse } from 'next/server';
import { Candidato } from '../../../../models/empregado'
import { Empregador } from '../../../../models/empregador'

export async function POST(request: Request) {
    const userData = await request.json(); 

    try {
        if (userData.cnpj) {
            const newEmpregador = await Empregador.create({
                email: userData.email,
                senha: userData.password,
                cpfcnpj: userData.cnpj,
                nome: userData.name,
            });
            return NextResponse.json(newEmpregador, { status: 201 });
        } else {
            const newCandidato = await Candidato.create({
                email: userData.email,
                senha: userData.password,
                nome: userData.name,
                penalizacao: 0, 
                latitude: 0, 
                longitude: 0, 
                curriculo: '', 
            });
            return NextResponse.json(newCandidato, { status: 201 });
        }
    } catch (error) {
        console.error('Erro ao criar usuário:', error);
        return NextResponse.json({ error: 'Erro ao cadastrar usuário' }, { status: 500 });
    }
}