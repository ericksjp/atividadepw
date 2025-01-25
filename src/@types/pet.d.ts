export type Pet = {
  id: string;
  name: string;
  type: string;
  description: string;
  vaccinated: boolean;
  deadline_vaccination: string;
  created_at: string;
};

export type PetInput = Omit<Pet, "id" | "created_at" | "vaccinated">;
