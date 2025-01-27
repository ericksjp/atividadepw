-- CreateTable
CREATE TABLE "Pet" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT,
    "vaccinated" BOOLEAN NOT NULL DEFAULT false,
    "deadline_vaccination" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "petshopCnpj" TEXT NOT NULL,

    CONSTRAINT "Pet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Petshop" (
    "cnpj" TEXT NOT NULL,
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Petshop_pkey" PRIMARY KEY ("cnpj")
);

-- CreateIndex
CREATE UNIQUE INDEX "Petshop_id_key" ON "Petshop"("id");

-- AddForeignKey
ALTER TABLE "Pet" ADD CONSTRAINT "Pet_petshopCnpj_fkey" FOREIGN KEY ("petshopCnpj") REFERENCES "Petshop"("cnpj") ON DELETE RESTRICT ON UPDATE CASCADE;
