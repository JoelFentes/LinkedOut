"use server";

import { Candidato } from "./empregado";
import { Empregador } from "./empregador";
var md5 = require('md5');

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

  static async login(email: string, senha: string, tipo: TipoUsuario) {
    let usuario;
    if (tipo == 'EMPREGADO') {
      usuario = await Candidato.findOne({where: { email: email, senha: md5(senha)}})
    } else if (tipo == "EMPREGADOR") {
      usuario = await Empregador.findOne({where: { email: email, senha: md5(senha)}});
    } else {
      throw "Usuário não existe"
    }
    if (usuario) {
      return new Usuario(usuario?.dataValues.id, usuario?.dataValues.nome, usuario?.dataValues.email, usuario.dataValues.cpfcnpj ? TipoUsuario.EMPREGADOR : TipoUsuario.EMPREGADO)
    }
    throw "Usuário não existe"
  }
}
