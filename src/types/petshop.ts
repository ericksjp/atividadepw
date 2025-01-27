import { Pet } from "../types/pet";
import {Petshop as PrismaPetshop} from "@prisma/client"

// Extend PetshopInput with additional properties
export type Petshop = PrismaPetshop & {
  pets: Pet[];
};

export type PetshopInput = Omit<Petshop, "id" | "pets" | "createtAt", "updatetAt">;
