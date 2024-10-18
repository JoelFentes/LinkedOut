"use server";
import { Empregado } from "./empregado";
import { TipoUsuario, Usuario } from "./usuario";
import { Vaga } from "./vaga";

export class Empregador {
  empresa: string;
  usuario: Usuario;

  constructor(
    id: number,
    nome: string,
    email: string,
    senha: string,
    tipo: TipoUsuario,
    empresa: string
  ) {
    this.empresa = empresa;
    this.usuario = new Usuario(id, nome, email, senha, tipo);
  }

  criarVaga(vaga: Vaga) {
    // Implementação de criação de vaga
  }

  editarVaga(vaga: Vaga) {
    // Implementação de edição de vaga
  }

  removerVaga(vaga: Vaga) {
    // Implementação de remoção de vaga
  }

  avaliarCandidato(candidato: Empregado) {}
}
