import axios from "axios";

export interface ServerResponse {
  data: CepResponse;
}

export interface CepResponse {
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
}

export async function getCEP(data: ServerResponse) {
  return axios
    .get(`https://viacep.com.br/ws/${data}/json/`)
    .catch((e) => console.log(e));
}
