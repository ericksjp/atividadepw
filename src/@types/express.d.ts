// types/express.d.ts
import { Request } from "express";
import { PetInput } from "./pet";
import { PetshopInput } from "./petshop";

declare global {
  namespace Express {
    interface Request {
      pet?: PetInput;
      petshop?: PetshopInput;
      cnpj?: string;
      cpf?: string;
    }
  }
}
