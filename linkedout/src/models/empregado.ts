"use server";
import { TipoUsuario, Usuario } from "./usuario";
import { Coordenadas } from "./coordenadas";
import { Vaga } from "./vaga";

export class Empregado {
  curriculo: string;
  localizacao: Coordenadas;
  penalizacao: number;
  usuario: Usuario;

  constructor(
    id: number,
    nome: string,
    email: string,
    senha: string,
    tipo: TipoUsuario,
    curriculo: string,
    localizacao: Coordenadas,
    penalizacao: number
  ) {
    this.curriculo = curriculo;
    this.localizacao = localizacao;
    this.penalizacao = penalizacao;
    this.usuario = new Usuario(id, nome, email, senha, tipo);
  }

  buscarVaga(filtros: any) {
    // Implementação de busca de vagas
  }

  candidatarVaga(vaga: Vaga) {
    // Implementação de candidatura a vaga
  }

  receberPenalizacao() {}
}
