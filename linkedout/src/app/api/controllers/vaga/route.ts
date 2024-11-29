'use server'

import { NextResponse } from "next/server";
import { Vaga } from "../../../../../models/vaga";

export async function POST(req: Request) {
    try {
      const data = await req.json();
      if (!data.distancia_maxima) {
          throw "Insira a distância máxima para essa vaga"
      }
      if (!data.latitude) {
          throw "Insira a latitude"
      }
      if (!data.longitude) {
          throw "Insira a longitude"
      }
      if (!data.id_empregador) {
          throw "Defina qual a empresa"
      }
      if (!data.titulo) {
          throw "Defina o título da vaga"
      }
      if (!data.descricao) {
          throw "Defina a descrição da vaga"
      }
      await Vaga.create(data);
      return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
      console.error("Ocorreu um erro:", error);
      return NextResponse.json({ success: false, message: error }, { status: 500 });
    }
  }