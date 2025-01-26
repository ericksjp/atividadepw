import PetshopService from "@services/petshop.service";
import { Request, Response } from "express";
import { PetInput } from "src/@types/pet";

export function listarPets(req: Request, res: Response) {
  const pets = PetshopService.getPets(req.cnpj as string);
  res.status(200).send(pets);
}

export function cadastrarPet(req: Request, res: Response) {
  const pet = PetshopService.insertPet(req.cnpj as string, req.pet as PetInput);
  res.status(201).send(pet);
}

export function atualizarPet(req: Request, res: Response) {
  const pet = PetshopService.updatePet(req.cnpj as string, req.petIndex as number, req.pet as PetInput);
  res.status(200).send(pet);
}

export function vacinarPet(req: Request, res: Response) {
  const pet = PetshopService.vaccinatePet(req.cnpj as string, req.petIndex as number);
  res.status(200).send(pet);
}

export function removerPet(req: Request, res: Response) {
  const pets = PetshopService.deletePet(req.cnpj as string, req.petIndex as number);
  res.status(200).send(pets);
}
