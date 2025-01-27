import {
  atualizarPet,
  cadastrarPet,
  listarPets,
  removerPet,
  vacinarPet,
} from "@controllers/pet.controller";
import { Router } from "express";
import {
  validatePetData,
  validatePetExistence,
} from "src/middlewares/validator";

const petsRouter = Router();

// chama a função de listagem
petsRouter.get("/", listarPets);

// valida os dados do pet e chama a função de cadastro
petsRouter.post("/", validatePetData, cadastrarPet);

// verifica se o pet existe, valida os dados do pet e chama a função de atualização
petsRouter.put("/:id", validatePetExistence, validatePetData, atualizarPet);

// verifica se o pet existe e chama a função de vacinação
petsRouter.patch("/:id/vaccinated", validatePetExistence, vacinarPet);

// verifica se o pet existe e chama a função de remoção
petsRouter.delete("/:id", validatePetExistence, removerPet);

export default petsRouter;
