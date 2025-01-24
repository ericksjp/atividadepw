// types/express.d.ts
import { Request } from "express";
import { Pet, PetInput } from "./pet";
import { Petshop, PetshopInput } from "./petshop";

declare global {
  namespace Express {
    interface Request {
      pet?: PetInput;
      petshop?: PetshopInput;
    }
  }
}
