import { Router } from "express";
import petshopRouter from "./petshow.route";

const router = Router();

router.use("/petshop", petshopRouter);

export default router;
