"use server";
export class Coordenadas {
  latitude: number;
  longitude: number;

  constructor(latitude: number, longitude: number) {
    this.latitude = latitude;
    this.longitude = longitude;
  }

  calcularDistancia(coordenada: Coordenadas) {}
}
