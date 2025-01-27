import PetshopService from "@services/petshop.service";
import { Request, Response } from "express";

export async function cadastrarPetshop(req: Request, res: Response) {
  try {
    const createdPetshop = await PetshopService.addPetshop(req.petshop);
    res.status(200).send(createdPetshop);
  } catch (error) {
    res.status(400).send({ error: "Petshop já cadastrado!" });
  }
}
