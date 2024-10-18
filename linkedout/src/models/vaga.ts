'use server'
import { Empregador } from './empregador';
import { Coordenadas } from './coordenadas';
import { Empregado } from './empregado';

export class Vaga {
  id: number;
  titulo: string;
  descricao: string;
  localizacao: Coordenadas;
  empregador: Empregador;
  distanciaMaxima: number;

  constructor(id: number, titulo: string, descricao: string, localizacao: Coordenadas, empregador: Empregador, distanciaMaxima: number) {
    this.id = id;
    this.titulo = titulo;
    this.descricao = descricao;
    this.localizacao = localizacao;
    this.empregador = empregador;
    this.distanciaMaxima = distanciaMaxima;
  }

  avaliarCandidato(empregado: Empregado) {

  }
}
