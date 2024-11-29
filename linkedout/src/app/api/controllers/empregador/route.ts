"use server";

import { NextResponse } from "next/server";
import { Empregador } from "../../../../../models/empregador";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    if (!data.email) {
      throw "Insira o e-mail da empresa";
    }
    if (!data.senha) {
      throw "Insira a senha de login da empresa";
    }
    if (!data.cpfcnpj) {
        throw "Insira o CNPJ/CPF da empresa";
    }
    if (!data.nome) {
        throw "Insira a Razão Social/Nome Fantasia/Marca da empresa";
    }
    await Empregador.create(data);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Ocorreu um erro:", error);
    return NextResponse.json(
      { success: false, message: error },
      { status: 500 }
    );
  }
}
