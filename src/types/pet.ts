import {Pet as PrismaPet} from "@prisma/client"

export type Pet = Omit<PrismaPet, "petshopCnpj">;
export type PetInput = Omit<Pet, "id" | "createdAt" | "vaccinated" | "updatedAt">;
