import { Pet } from "./pet";

export type Petshop = {
  id: string;
  name: string;
  cnpj: string;
  pets: Pet[];
};

export type PetshopInput = Omit<Petshop, "id" | "pets">;
