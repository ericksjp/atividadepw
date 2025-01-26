import { Router } from "express";
import petshopRouter from "./petshop.route";
import petsRouter from "./pet.route";
import { checkExistUsserAccount } from "src/middlewares/validator";

const router = Router();

// verifica se o petshop existe e chama a rota de pets
router.use("/pets", checkExistUsserAccount, petsRouter);

// chama a rota de petshop
router.use("/petshop", petshopRouter);

export default router;
