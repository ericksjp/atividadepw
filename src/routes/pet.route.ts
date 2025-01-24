import {
  cadastrarPet,
  listarPets,
  modificarPet,
  removerPet,
  vacinarPet,
} from "@controllers/pet.controller";
import { Router } from "express";

const petRouter = Router();

petRouter.get("/", listarPets);
petRouter.post("/", cadastrarPet);
petRouter.put("/:id", modificarPet);
petRouter.patch("/:id/vaccinated", vacinarPet);
petRouter.delete("/:id", removerPet);

export default petRouter;
