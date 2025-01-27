import PetshopService from "@services/petshop.service";
import { Request, Response } from "express";
import { PetInput } from "../types/pet";

export async function listarPets(req: Request, res: Response) {
  const pets = await PetshopService.getPets(req.cnpj as string);
  res.status(200).send(pets);
}

export async function cadastrarPet(req: Request, res: Response) {
  const createdPet = await PetshopService.insertPet(
    req.cnpj as string,
    req.pet as PetInput,
  );
  res.status(201).send(createdPet);
}

export async function atualizarPet(req: Request, res: Response) {
  const updatedPet = await PetshopService.updatePet(
    req.petId as string,
    req.pet as PetInput,
  );
  res.status(200).send(updatedPet);
}

export async function vacinarPet(req: Request, res: Response) {
  const vaccinatedPet = await PetshopService.vaccinatePet(req.petId as string);
  res.status(200).send(vaccinatedPet);
}

export async function removerPet(req: Request, res: Response) {
  const deletedPet = await PetshopService.deletePet(req.petId as string);
  res.status(200).send(deletedPet);
}
