export type Pet = {
  id: string;
  name: string;
  type: string;
  description?: string;
  vaccinated: boolean;
  deadline_vaccination: Date;
  created_at: Date;
};

export type PetInput = Omit<Pet, "id" | "created_at" | "vaccinated">;
