import { randomUUID } from "node:crypto";
import { Pet, PetInput } from "src/@types/pet";
import { Petshop, PetshopInput } from "src/@types/petshop";

const petshopMap = new Map<String, Petshop>();

class PetshopService {
  // o a geração do id petshop e a inicialização do array de pets ocorre aqui
  static addPetshop(petshop: PetshopInput): Petshop {
    const id = randomUUID();

    const petshopObject = petshopMap.set(petshop.cnpj, {
      id,
      ...petshop,
      pets: [],
    }).get(petshop.cnpj);

    return petshopObject as Petshop;
  }

  static hasPetshop(cnpj: string): boolean {
    return petshopMap.has(cnpj);
  }

  static getPets(cnpj: string): Pet[] {
    return petshopMap.get(cnpj)?.pets || [];
  }

  static insertPet(cnpj: string, pet: PetInput): Pet {
    const petshop = petshopMap.get(cnpj);

    if (!petshop) {
      throw new Error("Petshop não encontrado!");
    }

    const petObject: Pet = {
      ...pet,
      id: randomUUID(),
      vaccinated: false,
      created_at: new Date(),
    };

    petshop.pets.push(petObject);
    return petObject;
  }

  static updatePet(cnpj: string, petIndex: number, pet: PetInput): Pet {
    const petshop = petshopMap.get(cnpj);

    if (!petshop) {
      throw new Error("Petshop não encontrado!");
    }

    const oldPetObject = petshop.pets[petIndex];

    if (!oldPetObject) {
      throw new Error("Pet não encontrado!");
    }

    const newPetObject: Pet = {
      ...oldPetObject,
      ...pet,
    };

    petshop.pets[petIndex] = newPetObject;

    return newPetObject;
  }

  static vaccinatePet(cnpj: string, petIndex: number): Pet {
    const petObject = this.getPetObject(cnpj, petIndex);
    petObject.vaccinated = true;
    return petObject;
  }

  static deletePet(cnpj: string, petIndex: number): Pet[] {
    const petshop = petshopMap.get(cnpj);

    if (!petshop) {
      throw new Error("Petshop não encontrado!");
    }

    petshop.pets.splice(petIndex, 1);

    return petshop.pets;
  }

  static getPetObject(cnpj: string, petIndex: number): Pet {
    const petshop = petshopMap.get(cnpj);

    if (!petshop) {
      throw new Error("Petshop não encontrado!");
    }

    const petObject = petshop.pets[petIndex];

    if (!petObject) {
      throw new Error("Pet não encontrado!");
    }

    return petObject;
  }

  static getPetIndex(cnpj: string, petId: string): number {
    const petshop = petshopMap.get(cnpj);

    if (!petshop) {
      throw new Error("Petshop não encontrado!");
    }

    const petObject = petshop.pets.findIndex((p) => p.id === petId);

    return petObject;
  }
}

export default PetshopService;
