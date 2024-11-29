// models/usuario.ts

import { Candidato } from "./empregado";
import { Empregador } from "./empregador";

// Enum para tipos de usuários
export enum TipoUsuario {
  EMPREGADOR = "EMPREGADOR",
  EMPREGADO = "EMPREGADO",
}

export class Usuario {
  id: number;
  nome: string;
  email: string;
  tipo: TipoUsuario;

  private constructor(
    id: number,
    nome: string,
    email: string,
    tipo: TipoUsuario
  ) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.tipo = tipo;
  }

  // Método para login
  static async login(email: string, senha: string, tipo: TipoUsuario) {
    let usuario;

    if (tipo === "EMPREGADO") {
      usuario = await Candidato.findOne({ where: { email: email, senha: senha } });
    } else if (tipo === "EMPREGADOR") {
      usuario = await Empregador.findOne({ where: { email: email, senha: senha } });
    } else {
      throw new Error("Usuário não existe");
    }

    if (usuario) {
      // Retorna os dados do usuário
      return new Usuario(usuario?.dataValues.id, usuario?.dataValues.nome, usuario?.dataValues.email, usuario.dataValues.cpfcnpj ? TipoUsuario.EMPREGADOR : TipoUsuario.EMPREGADO);
    }

    throw new Error("Usuário não existe");
  }
}
