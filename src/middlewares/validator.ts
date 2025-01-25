import { Request, Response, NextFunction } from "express";
import { cnpj as cnpjValidator } from "cpf-cnpj-validator";
import PetshopService from "@services/petshop.service";

// middleware para validação dos dados relacionado ao petshop enviados no body da requisição
export function validatePetshop(req: Request, res: Response, next: NextFunction) {
  const { name, cnpj } = req.body || {};

  if (!name) {
    res.status(400).json({ error: "Nome é obrigatorio!" });
    return
  }

  const nameParsed  = name.trim();

  if (nameParsed.length < 2 || nameParsed.length > 255) {
    res.status(400).json({ error: "Nome deve conter entre 2 e 255 caracteres!" });
    return;
  }

  if (!cnpj) {
    res.status(400).json({ error: "CNPJ é obrigatorio!" });
    return
  }

  if (!cnpjValidator.isValid(cnpj)) {
    res.status(400).json({ error: "CNPJ inválido!" });
    return
  }

  if (PetshopService.hasPetshop(cnpj)) {
    res.status(400).json({ error: "Petshop já cadastrado!" });
    return
  }

  req.petshop = { name: nameParsed, cnpj };

  next();
}
