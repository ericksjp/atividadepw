import { cadastrarPetshop } from "@controllers/petshop.controller";
import { Router } from "express";
import { validatePetshop } from "src/middlewares/validator";

const petshopRouter = Router();

petshopRouter.post("/", validatePetshop, cadastrarPetshop);

export default petshopRouter;
