"use server";

import { Request, Response } from "express";
import { Candidato } from "../models/empregado";
import { Empregador } from "../models/empregador";
import { TipoUsuario } from "../models/usuario";
import md5 from "md5";

interface SignupRequestBody {
  nome: string;
  email: string;
  senha: string;
  tipo: TipoUsuario;
  cpfcnpj?: number;
  penalizacao?: number;
  latitude?: number;
  longitude?: number;
  curriculo?: string;
}

export async function signup(req: Request, res: Response) {
  const { nome, email, senha, tipo, cpfcnpj, penalizacao = 0, latitude = 0, longitude = 0, curriculo = "" } = req.body as SignupRequestBody;

  try {
    if (tipo === TipoUsuario.EMPREGADO) {
      // Registro de um empregado
      const novoCandidato = await Candidato.create({
        nome,
        email,
        senha: md5(senha),
        penalizacao,
        latitude,
        longitude,
        curriculo,
      });
      return res.status(201).json({ message: "Candidato registrado com sucesso", usuario: novoCandidato });
    } else if (tipo === TipoUsuario.EMPREGADOR) {
      // Registro de um empregador
      const novoEmpregador = await Empregador.create({
        nome,
        email,
        senha: md5(senha),
        cpfcnpj,
      });
      return res.status(201).json({ message: "Empregador registrado com sucesso", usuario: novoEmpregador });
    } else {
      return res.status(400).json({ message: "Tipo de usuário inválido" });
    }
  } catch (error) {
    console.error("Erro ao registrar usuário:", error);
    return res.status(500).json({ message: "Erro no servidor ao registrar usuário", error });
  }
}
