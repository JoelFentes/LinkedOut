"use server";
import axios from "axios";
export class Coordenadas {
  latitude: number;
  longitude: number;

  constructor(latitude: number, longitude: number) {
    this.latitude = latitude;
    this.longitude = longitude;
  }

  static async calcularDistancia(coordenadaEmpresa: Coordenadas, coordenadaCandidato: Coordenadas) {
    const apiKey = "5b3ce3597851110001cf6248cc8d73c7ee564f7bbfc2f3dfa1e3cf92";
    const baseUrl =
      "https://api.openrouteservice.org/v2/directions/driving-car";

    // URL da requisição para o OpenRouteService
    const url = `${baseUrl}?api_key=${apiKey}&start=${coordenadaCandidato.longitude},${coordenadaCandidato.latitude}&end=${coordenadaEmpresa.longitude},${coordenadaEmpresa.latitude}`;

    // Realizando a requisição
    const responseDistance = await axios.get(url);
    return responseDistance.data.features[0].properties.segments[0].distance;
  }
}
