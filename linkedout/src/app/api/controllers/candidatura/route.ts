"use server";

import { NextResponse } from "next/server";
import { Candidatura } from "../../../../../models/candidatura";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    if (!data.id_vaga) {
        throw "Nenhuma vaga foi selecionada"
    }
    if (!data.distancia) {
        throw "Insira a distancia"
    }
    if (!data.status) {
        data.status = "pendente"
    }
    await Candidatura.create(data);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Ocorreu um erro:", error);
    return NextResponse.json({ success: false, message: error }, { status: 500 });
  }
}
