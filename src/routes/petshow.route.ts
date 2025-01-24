import { cadastrarPetshop } from "@controllers/petshop.controller";
import { Router } from "express";

const petshopRouter = Router();

petshopRouter.post("/", cadastrarPetshop);

export default petshopRouter;
