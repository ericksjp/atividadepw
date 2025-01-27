import { Pet, PetInput } from "../types/pet";
import { Petshop, PetshopInput } from "../types/petshop";
import prisma from "src/db/prisma";

class PetshopService {
  // o a geração do id petshop e a inicialização do array de pets ocorre aqui
  static async addPetshop(petshop: PetshopInput): Promise<Petshop> {
    const petshopObject = await prisma.petshop.create({
      data: {
        ...petshop,
      },
    });

    return { ...petshopObject, pets: [] };
  }

  static async hasPetshop(cnpj: string): Promise<boolean> {
    return !!(await prisma.petshop.findUnique({ where: { cnpj } }));
  }

  static async getPets(cnpj: string): Promise<Pet[]> {
    return prisma.pet.findMany({
      where: { petshopCnpj: cnpj },
      omit: { petshopCnpj: true },
    });
  }

  static async insertPet(cnpj: string, pet: PetInput): Promise<Pet> {
    return await prisma.pet.create({
      data: { ...pet, petshopCnpj: cnpj, vaccinated: false },
      omit: { petshopCnpj: true },
    });
  }

  static async updatePet(petId: string, pet: PetInput): Promise<Pet> {
    return await prisma.pet.update({
      where: { id: petId },
      data: pet,
      omit: { petshopCnpj: true },
    });
  }

  static async vaccinatePet(petId: string): Promise<Pet> {
    return await prisma.pet.update({
      where: { id: petId },
      data: { vaccinated: true },
      omit: { petshopCnpj: true },
    });
  }

  static async deletePet(petId: string): Promise<Pet[]> {
    const pet = await prisma.pet.delete({
      where: { id: petId },
    });

    if (!pet) {
      throw new Error("Pet não encontrado!");
    }

    return await prisma.pet.findMany({
      where: { petshopCnpj: pet.petshopCnpj },
      omit: { petshopCnpj: true },
    });
  }

  static async getPetObject(petId: string): Promise<Pet | null> {
    return await prisma.pet.findUnique({
      where: { id: petId },
      omit: { petshopCnpj: true },
    });
  }
}

export default PetshopService;
