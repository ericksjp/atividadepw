import PetshopService from "@services/petshop.service";
import {  Request, Response } from "express";

export function cadastrarPetshop(req: Request, res: Response) {
  if (!req.petshop) return;
  res.status(200).send(PetshopService.addPetshop(req.petshop));
}
