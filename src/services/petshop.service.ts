import { randomUUID }  from 'node:crypto';
import { Petshop, PetshopInput } from "src/@types/petshop";

const petshopMap = new Map<String, Petshop>();

class PetshopService {
  // o a geração do id petshop e a inicialização do array de pets ocorre aqui
  static create(petshop: PetshopInput) {
    const id = randomUUID();

    const obj = petshopMap.set(petshop.cnpj, {
      id,
      ...petshop,
      pets: [],
    }).get(petshop.cnpj);

    return obj;
  }

  static hasPetshop(cnpj: string) {
    return petshopMap.has(cnpj);
  }
}

export default PetshopService;
