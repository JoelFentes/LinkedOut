"use server";
import { Vaga } from "./vaga";
import { Empregado } from "./empregado";
import { Coordenadas } from "./coordenadas";

export enum StatusCandidatura {
  PENDENTE = "PENDENTE",
  APROVADO = "APROVADO",
  RECUSADO = "RECUSADO",
}

export class Candidatura {
  id: number;
  vaga: Vaga;
  empregado: Empregado;
  distancia: number;
  status: StatusCandidatura;

  constructor(
    id: number,
    vaga: Vaga,
    empregado: Empregado,
    distancia: number,
    status: StatusCandidatura
  ) {
    this.id = id;
    this.vaga = vaga;
    this.empregado = empregado;
    this.distancia = distancia;
    this.status = status;
  }

  calcularDistancia(empregado: Empregado, coordenadas: Coordenadas) {}

  penalizarEmpregadoSeNecessario(
    empregado: Empregado,
    distanciaMaxima: number
  ) {}
}
