import { cadastrarPetshop } from "@controllers/petshop.controller";
import { Router } from "express";
import { validatePetshopData } from "src/middlewares/validator";

const petshopRouter = Router();

petshopRouter.post("/", validatePetshopData, cadastrarPetshop);

export default petshopRouter;
