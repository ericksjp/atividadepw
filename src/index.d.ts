// types/express.d.ts
import { Request } from "express";
import { PetInput } from "./types/pet";
import { PetshopInput } from "./types/petshop";

declare global {
  namespace Express {
    interface Request {
      pet?: PetInput;
      petshop?: PetshopInput;
      cnpj?: string;
      cpf?: string;
      petId?: string;
    }
  }
}
